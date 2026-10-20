import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import {
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  collection,
  getFirestore,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getBytes,
  getDownloadURL,
  getMetadata,
  getStorage,
  listAll,
  ref,
  uploadBytes,
  uploadString,
} from 'firebase/storage';
import { fromFullData, toFullData, type CmsContent } from './cms-data';

// Web config is public by design; access is enforced by storage.rules and firestore.rules.
const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'pspace-ai-cms.firebaseapp.com',
  projectId: 'pspace-ai-cms',
  storageBucket: 'pspace-ai-cms.firebasestorage.app',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// ponytail: the site still reads the Apps Script all.json; switching DataContext's DATA_URL to this path is the cutover.
export const CONTENT_PATH = 'cms/all.json';
const LEGACY_PATH = 'all.json';

export const signIn = () =>
  signInWithPopup(auth, new GoogleAuthProvider().setCustomParameters({ hd: 'pspace.ai' }));
export const logOut = () => signOut(auth);

export async function isAdmin(email: string) {
  try {
    return (await getDoc(doc(db, 'admins', email))).exists();
  } catch {
    return false;
  }
}

export async function listAdmins() {
  const snap = await getDocs(collection(db, 'admins'));
  return snap.docs.map((d) => d.id).sort();
}

export const addAdmin = (email: string, by: string) =>
  setDoc(doc(db, 'admins', email.trim().toLowerCase()), { addedBy: by, addedAt: serverTimestamp() });
export const removeAdmin = (email: string) => deleteDoc(doc(db, 'admins', email));

async function readJson(path: string) {
  const bytes = await getBytes(ref(storage, path));
  return JSON.parse(new TextDecoder().decode(bytes));
}

export interface Loaded {
  content: CmsContent;
  generation: string | null;
}

/** Current admin content, or null when the admin has never saved yet. */
export async function loadContent(): Promise<Loaded | null> {
  try {
    const meta = await getMetadata(ref(storage, CONTENT_PATH));
    return { content: fromFullData(await readJson(CONTENT_PATH)), generation: meta.generation };
  } catch (e) {
    if ((e as { code?: string }).code === 'storage/object-not-found') return null;
    throw e;
  }
}

export async function loadLegacy(): Promise<CmsContent> {
  return fromFullData(await readJson(LEGACY_PATH));
}

export async function currentGeneration() {
  try {
    return (await getMetadata(ref(storage, CONTENT_PATH))).generation;
  } catch {
    return null;
  }
}

export async function saveContent(content: CmsContent): Promise<string> {
  const target = ref(storage, CONTENT_PATH);
  const previous = await getBytes(target).catch(() => null);
  if (previous) {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    await uploadBytes(ref(storage, `cms/backups/${stamp}.json`), previous, {
      contentType: 'application/json',
    });
  }
  const res = await uploadString(target, JSON.stringify(toFullData(content), null, 2), 'raw', {
    contentType: 'application/json',
    cacheControl: 'no-cache',
  });
  return res.metadata.generation;
}

export async function listBackups() {
  const { items } = await listAll(ref(storage, 'cms/backups'));
  return items.map((i) => i.name).sort().reverse();
}

export async function loadBackup(name: string) {
  return fromFullData(await readJson(`cms/backups/${name}`));
}

async function toWebp(file: File, maxSide = 1600): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('이미지 변환 실패'))), 'image/webp', 0.85),
  );
}

export async function uploadImage(file: File, folder: 'events' | 'news'): Promise<string> {
  const blob = await toWebp(file);
  const stamp = new Date().toISOString().slice(0, 19).replace(/[-:T]/g, '');
  const name = `${stamp}-${Math.random().toString(36).slice(2, 8)}.webp`;
  const target = ref(storage, `images/${folder}/${name}`);
  await uploadBytes(target, blob, { contentType: 'image/webp', cacheControl: 'public, max-age=31536000' });
  return getDownloadURL(target);
}

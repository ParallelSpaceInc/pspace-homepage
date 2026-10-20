'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { toast } from 'sonner';
import type { CmsContent } from '@/lib/cms-data';
import {
  auth,
  currentGeneration,
  isAdmin,
  loadContent,
  loadLegacy,
  logOut,
  saveContent,
  signIn,
} from '@/lib/cms';
import {
  AdminsPanel,
  BackupsPanel,
  EventsEditor,
  HelpPanel,
  HistoryEditor,
  NewsEditor,
  SheetEditor,
  blank,
  btn,
  columns,
  validate,
} from './sections';

type Session =
  | { state: 'loading' }
  | { state: 'signedOut' }
  | { state: 'denied'; user: User }
  | { state: 'admin'; user: User };

const TABS = [
  { key: 'events', label: '팝업' },
  { key: 'news', label: '뉴스' },
  { key: 'history', label: '연혁' },
  { key: 'admins', label: '관리자' },
  { key: 'backups', label: '백업' },
  { key: 'help', label: '사용법' },
] as const;
type Tab = (typeof TABS)[number]['key'];

export default function AdminApp() {
  const [session, setSession] = useState<Session>({ state: 'loading' });

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (!user?.email) return setSession({ state: 'signedOut' });
        setSession({ state: 'loading' });
        setSession((await isAdmin(user.email)) ? { state: 'admin', user } : { state: 'denied', user });
      }),
    [],
  );

  if (session.state === 'loading') return <Center>불러오는 중…</Center>;
  if (session.state === 'signedOut')
    return (
      <Center>
        <h1 className='text-xl font-bold'>pspace.ai 관리자</h1>
        <button className={btn.primary} onClick={() => signIn().catch((e) => toast.error(String(e)))}>
          회사 Google 계정으로 로그인
        </button>
      </Center>
    );
  if (session.state === 'denied')
    return (
      <Center>
        <p>
          <b>{session.user.email}</b> 계정은 관리자가 아닙니다.
        </p>
        <p className='text-sm text-gray-500'>기존 관리자에게 &quot;관리자&quot; 메뉴에서 추가해 달라고 요청하세요.</p>
        <button className={btn.outline} onClick={logOut}>
          다른 계정으로 로그인
        </button>
      </Center>
    );
  return <Editor email={session.user.email!} />;
}

function Editor({ email }: { email: string }) {
  const [tab, setTab] = useState<Tab>('events');
  const [content, setContent] = useState<CmsContent | null>(null);
  const [generation, setGeneration] = useState<string | null>(null);
  const [empty, setEmpty] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [view, setViewState] = useState<'card' | 'sheet'>('card');

  useEffect(() => {
    try {
      if (localStorage.getItem('admin-view') === 'sheet') setViewState('sheet');
    } catch {}
  }, []);
  const setView = (v: 'card' | 'sheet') => {
    setViewState(v);
    try {
      localStorage.setItem('admin-view', v);
    } catch {}
  };
  const sheet = view === 'sheet' && (tab === 'events' || tab === 'news' || tab === 'history');

  const [stale, setStale] = useState(false);

  const pull = async () => {
    try {
      const loaded = await loadContent();
      if (!loaded) return setEmpty(true);
      setContent(loaded.content);
      setGeneration(loaded.generation);
      setDirty(false);
      setStale(false);
    } catch (e) {
      toast.error(`불러오기 실패: ${e}`);
    }
  };

  useEffect(() => {
    pull();
  }, []);

  // ponytail: checks only when the tab regains focus (one metadata read); polling would eat the free op quota.
  useEffect(() => {
    if (!generation) return;
    const check = async () => {
      if (document.visibilityState !== 'visible' || (await currentGeneration()) === generation) return;
      if (dirty) return setStale(true);
      await pull();
      toast.info('다른 관리자가 저장한 최신 내용을 불러왔습니다.');
    };
    window.addEventListener('focus', check);
    document.addEventListener('visibilitychange', check);
    return () => {
      window.removeEventListener('focus', check);
      document.removeEventListener('visibilitychange', check);
    };
  }, [generation, dirty]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const update = (next: CmsContent) => {
    setContent(next);
    setDirty(true);
  };

  const importLegacy = async () => {
    try {
      update(await loadLegacy());
      setEmpty(false);
      toast.success('시트 데이터를 가져왔습니다. 확인 후 저장을 누르세요.');
    } catch (e) {
      toast.error(`가져오기 실패: ${e}`);
    }
  };

  const save = async () => {
    if (!content) return;
    const problems = validate(content);
    if (problems.length) return toast.error(problems.join('\n'));
    if (
      (await currentGeneration()) !== generation &&
      !confirm('다른 관리자가 그 사이에 저장했습니다.\n\n확인: 내 내용으로 덮어쓰기 (상대방 수정은 백업에만 남음)\n취소: 저장하지 않음 (위쪽 "최신 내용 불러오기"로 받아올 수 있음)')
    )
      return setStale(true);
    setSaving(true);
    try {
      setGeneration(await saveContent(content));
      setDirty(false);
      setStale(false);
      toast.success('저장했습니다. 이전 내용은 백업에 남아 있습니다.');
    } catch (e) {
      toast.error(`저장 실패: ${e}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={`mx-auto px-4 pb-24 ${sheet ? 'max-w-none' : 'max-w-4xl'}`}>
      <header className='sticky top-0 z-10 -mx-4 flex flex-wrap items-center gap-2 border-b bg-white px-4 py-3'>
        <h1 className='mr-auto font-bold'>pspace.ai 관리자</h1>
        <span className='text-sm text-gray-500'>{email}</span>
        <button className={btn.outline} onClick={logOut}>
          로그아웃
        </button>
        <button className={btn.primary} disabled={!dirty || saving} onClick={save}>
          {saving ? '저장 중…' : dirty ? '저장하기' : '저장됨'}
        </button>
        <nav className='flex w-full gap-1'>
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-md px-3 py-1.5 text-sm ${tab === t.key ? 'bg-gray-800 text-white' : 'hover:bg-gray-100'}`}
            >
              {t.label}
            </button>
          ))}
          {(tab === 'events' || tab === 'news' || tab === 'history') && (
            <div className='ml-auto flex rounded-md border text-sm'>
              {(['card', 'sheet'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-3 py-1 ${view === v ? 'bg-gray-800 text-white' : 'hover:bg-gray-100'}`}
                >
                  {v === 'card' ? '카드' : '시트'}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className='pt-6'>
        {stale && (
          <div className='mb-4 flex flex-wrap items-center gap-3 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm'>
            <p className='mr-auto'>다른 관리자가 저장한 새 내용이 있습니다. 내 수정은 아직 저장 전입니다.</p>
            <button
              className={btn.outline}
              onClick={() => confirm('내 수정을 버리고 최신 내용을 불러올까요?') && pull()}
            >
              최신 내용 불러오기
            </button>
          </div>
        )}
        {tab === 'admins' ? (
          <AdminsPanel me={email} />
        ) : tab === 'help' ? (
          <HelpPanel />
        ) : tab === 'backups' ? (
          <BackupsPanel onRestore={update} onImportLegacy={importLegacy} />
        ) : empty && !content ? (
          <div className='space-y-3 rounded-lg border bg-white p-6'>
            <p>아직 관리자 페이지에 저장된 콘텐츠가 없습니다.</p>
            <p className='text-sm text-gray-500'>
              지금 Google 시트에 있는 팝업, 뉴스, 연혁을 그대로 가져와 시작합니다.
            </p>
            <button className={btn.primary} onClick={importLegacy}>
              기존 시트 데이터 가져오기
            </button>
          </div>
        ) : !content ? (
          <p>불러오는 중…</p>
        ) : sheet && tab === 'events' ? (
          <SheetEditor
            rows={content.events}
            cols={columns.events}
            folder='events'
            make={blank.events}
            onChange={(events) => update({ ...content, events })}
          />
        ) : sheet && tab === 'news' ? (
          <SheetEditor
            rows={content.news}
            cols={columns.news}
            folder='news'
            make={blank.news}
            onChange={(news) => update({ ...content, news })}
          />
        ) : sheet ? (
          <SheetEditor
            rows={content.history}
            cols={columns.history}
            make={blank.history}
            onChange={(history) => update({ ...content, history })}
          />
        ) : tab === 'events' ? (
          <EventsEditor rows={content.events} onChange={(events) => update({ ...content, events })} />
        ) : tab === 'news' ? (
          <NewsEditor rows={content.news} onChange={(news) => update({ ...content, news })} />
        ) : (
          <HistoryEditor rows={content.history} onChange={(history) => update({ ...content, history })} />
        )}
      </main>
    </div>
  );
}

function Center({ children }: { children: React.ReactNode }) {
  return <div className='flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center'>{children}</div>;
}

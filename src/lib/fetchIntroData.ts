import { FullData } from '@/contexts/DataContext';

export const DATA_URL =
  'https://firebasestorage.googleapis.com/v0/b/pspace-ai-cms.firebasestorage.app/o/all.json?alt=media';

export async function getData(): Promise<FullData | null> {
  try {
    const res = await fetch(DATA_URL, { cache: 'no-store' }); // or 'force-cache' depending on needs
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

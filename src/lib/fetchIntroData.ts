import { FullData } from '@/contexts/DataContext';

const DATA_URL = 'https://drive.google.com/uc?export=download&id=1LxmMia-Jek5H31-svAcExnOlV81CEwca';

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

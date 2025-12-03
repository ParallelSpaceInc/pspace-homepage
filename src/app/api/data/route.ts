import { NextResponse } from 'next/server';

const DATA_URL = 'https://drive.google.com/uc?export=download&id=1LxmMia-Jek5H31-svAcExnOlV81CEwca';

export async function GET() {
  try {
    const res = await fetch(DATA_URL, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch data from source');
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data in API route:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export const INTRO_DATA_URL =
  'https://script.google.com/macros/s/AKfycbzN3TKPClHNFdQ_EwvHXjhFVfyjaUs-XyPbI-CLA1pVGWrmpLJkFV6b-6G_0Hf8fW8/exec?sheets=events_list,news_info';

type RawSheetRow = { [k: string]: any };

export type IntroResponse = {
  success: boolean;
  lastUpdated?: string;
  sheetNames?: string[];
  sheets?: {
    events_list?: { headers: string[]; rows: RawSheetRow[]; count: number };
    news_info?: { headers: string[]; rows: RawSheetRow[]; count: number };
  };
};

const CACHE_KEY = 'pspace_intro_data_v1';
let inMemoryCache: IntroResponse | null = null;
let inFlightPromise: Promise<IntroResponse> | null = null;

export async function fetchIntroData(): Promise<IntroResponse> {
  if (inMemoryCache) return inMemoryCache;
  if (inFlightPromise) return inFlightPromise;
  try {
    // sessionStorage cache on client
    if (typeof window !== 'undefined') {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const parsed = JSON.parse(cached) as IntroResponse;
          inMemoryCache = parsed;
          // return cached first, but continue to revalidate in background
          // For now, return cached and let consumers decide to re-fetch
          return parsed;
        } catch (e) {
          // ignore and fetch
        }
      }
    }
    const fetched = (async () => {
      const res = await fetch(INTRO_DATA_URL);
      const json = (await res.json()) as IntroResponse;
      inMemoryCache = json;
      try {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(json));
        }
      } catch (e) {
        // ignore
      }
      return json;
    })();
    inFlightPromise = fetched;
    const json = await fetched;
    inFlightPromise = null;
    return json;
  } catch (e) {
    // if fetch fails, return an empty success=false payload
    return { success: false };
  }
}

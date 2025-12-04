'use client';

import { createContext, useContext, useEffect, useState, useRef, ReactNode } from 'react';

const DATA_URL =
  'https://firebasestorage.googleapis.com/v0/b/pspace-ai-cms.firebasestorage.app/o/all.json?alt=media';

export interface EventsDataItem {
  date: string;
  is_for_modal: boolean;
  image_link: string;
  external_link: string;
  alt: string;
}

export interface NewsDataItem {
  date: string;
  newsSrc: string;
  imgSrc: string;
  newsTitle: string;
  newsInfo: string;
  newsContent: string;
}

export interface HistoryDataItem {
  Year: number;
  Month: number;
  Content: string;
  Content_en: string;
}

interface DataContextType {
  events: EventsDataItem[];
  news: NewsDataItem[];
  history: HistoryDataItem[];
  loading: boolean;
  error: string | null;
  lastUpdated: string | null;
  fetchData: () => Promise<void>;
  setEvents: (events: EventsDataItem[]) => void;
  setNews: (news: NewsDataItem[]) => void;
  setHistory: (history: HistoryDataItem[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export interface FullData {
  lastUpdated: string;
  sheetNames: string[];
  sheets: {
    events: { rows: EventsDataItem[] };
    news: { rows: NewsDataItem[] };
    history: { rows: HistoryDataItem[] };
  };
}

export function DataProvider({
  children,
  initialData,
}: {
  children: ReactNode;
  initialData?: FullData | null;
}) {
  const [events, setEvents] = useState<EventsDataItem[]>(initialData?.sheets?.events?.rows || []);
  const [news, setNews] = useState<NewsDataItem[]>(initialData?.sheets?.news?.rows || []);
  const [history, setHistory] = useState<HistoryDataItem[]>(
    initialData?.sheets?.history?.rows || [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(initialData?.lastUpdated || null);
  const hasFetched = useRef(false);

  // 데이터 fetch 함수
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      if (data.sheets) {
        // lastUpdated가 다르면 (새 데이터가 있으면) 업데이트
        if (data.lastUpdated !== lastUpdated) {
          setEvents(data.sheets.events?.rows || []);
          setNews(data.sheets.news?.rows || []);
          setHistory(data.sheets.history?.rows || []);
          setLastUpdated(data.lastUpdated);
        }
      } else {
        throw new Error('Invalid data structure');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  // 최초 마운트 시 한 번만 fetch
  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchData();
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        events,
        news,
        history,
        loading,
        error,
        lastUpdated,
        fetchData,
        setEvents,
        setNews,
        setHistory,
        setLoading,
        setError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

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
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export interface FullData {
  success: boolean;
  lastUpdated: string;
  sheetNames: string[];
  sheets: {
    events: { rows: EventsDataItem[] };
    news: { rows: NewsDataItem[] };
    history: { rows: HistoryDataItem[] };
  };
}

const DATA_URL = '/api/data';

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
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) return;

    const fetchData = async () => {
      try {
        const response = await fetch(DATA_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        if (data.success && data.sheets) {
          setEvents(data.sheets.events?.rows || []);
          setNews(data.sheets.news?.rows || []);
          setHistory(data.sheets.history?.rows || []);
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

    fetchData();
  }, [initialData]);

  return (
    <DataContext.Provider value={{ events, news, history, loading, error }}>
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

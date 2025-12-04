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
  setEvents: (events: EventsDataItem[]) => void;
  setNews: (news: NewsDataItem[]) => void;
  setHistory: (history: HistoryDataItem[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
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

  return (
    <DataContext.Provider
      value={{
        events,
        news,
        history,
        loading,
        error,
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

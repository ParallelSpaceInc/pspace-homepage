import type {
  EventsDataItem,
  FullData,
  HistoryDataItem,
  NewsDataItem,
} from '@/contexts/DataContext';

export interface CmsContent {
  events: EventsDataItem[];
  news: NewsDataItem[];
  history: HistoryDataItem[];
}

const str = (v: unknown) => (v == null ? '' : String(v).trim());

// Apps Script stored sheet dates as UTC instants of KST midnight (2026-10-14 -> 2026-10-13T15:00:00.000Z).
export function toKstDate(v: unknown): string {
  const s = str(v);
  if (!s || /^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const t = new Date(s).getTime();
  if (Number.isNaN(t)) return s;
  return new Date(t + 9 * 3600_000).toISOString().slice(0, 10);
}

const toBool = (v: unknown) => v === true || str(v).toUpperCase() === 'TRUE';

export function normalizeEvent(row: object): EventsDataItem {
  const r = row as Record<string, unknown>;
  return {
    date: toKstDate(r.date),
    is_for_modal: toBool(r.is_for_modal),
    image_link: str(r.image_link),
    external_link: str(r.external_link),
    alt: str(r.alt),
  };
}

export function normalizeNews(row: object): NewsDataItem {
  const r = row as Record<string, unknown>;
  return {
    date: toKstDate(r.date),
    newsSrc: str(r.newsSrc),
    imgSrc: str(r.imgSrc),
    newsTitle: str(r.newsTitle),
    newsInfo: str(r.newsInfo),
    newsContent: str(r.newsContent),
  };
}

export function normalizeHistory(row: object): HistoryDataItem {
  const r = row as Record<string, unknown>;
  return {
    Year: Number(r.Year) || 0,
    Month: Number(r.Month) || 0,
    Content: str(r.Content),
    Content_en: str(r.Content_en),
  };
}

const isBlank = (o: object) => Object.values(o).every((v) => v === '' || v === 0 || v === false);

type Rows = { rows?: object[] } | undefined;

export function fromFullData(data: { sheets?: object }): CmsContent {
  const sheets = data.sheets as Record<string, Rows> | undefined;
  const rows = (name: string) => sheets?.[name]?.rows ?? [];
  return {
    events: rows('events').map(normalizeEvent).filter((r) => !isBlank(r)),
    news: rows('news').map(normalizeNews).filter((r) => !isBlank(r)),
    history: rows('history').map(normalizeHistory).filter((r) => !isBlank(r)),
  };
}

export function toFullData(c: CmsContent): FullData {
  return {
    lastUpdated: new Date().toISOString(),
    sheetNames: ['events', 'news', 'history'],
    sheets: {
      events: { rows: c.events.map(normalizeEvent).filter((r) => !isBlank(r)) },
      news: { rows: c.news.map(normalizeNews).filter((r) => !isBlank(r)) },
      history: { rows: c.history.map(normalizeHistory).filter((r) => !isBlank(r)) },
    },
  };
}

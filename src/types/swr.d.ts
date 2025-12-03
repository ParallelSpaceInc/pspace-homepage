declare module 'swr' {
  export default function useSWR<Data = any, Error = any>(
    key: string | null,
    fetcher?: (...args: any[]) => Promise<Data>,
    options?: any,
  ): {
    data?: Data;
    error?: Error;
    isLoading?: boolean;
    mutate?: (data?: Data | Promise<Data>, shouldRevalidate?: boolean) => Promise<Data | undefined>;
  };
}

import { useState, useEffect } from 'react';

interface ApiOptions {
  method: string;
  body?: string;
  headers?: HeadersInit;
}

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export function useApi<T>(url: string, options: ApiOptions | null = null): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options || {});
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, loading };
}

import { useSearchParams } from 'next/navigation';

export function usePagination() {
  const searchParams = useSearchParams();

  return {
    page: Number(searchParams.get('page')) || 0,
    pageSize: Number(searchParams.get('pageSize')) || 10,
    current: Number(searchParams.get('page')) || 0,
  };
}

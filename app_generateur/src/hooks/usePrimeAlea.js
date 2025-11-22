
import { useQuery } from '@tanstack/react-query';
import { fetchNumberAlea } from '../api/fetchApi';

export function usePrimeAlea() {
  return useQuery({
    queryKey: ['primeAlea'],
    queryFn: fetchNumberAlea,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
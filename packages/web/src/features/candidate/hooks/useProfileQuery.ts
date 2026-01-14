import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/utils/apiClient';
import type { Profile } from '../types/Profile';

const QUERY_KEY = 'profile';

export const useProfileQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      try {
        const response = await apiClient.get<Profile>('/profile');

        return response.data;
      } catch (error) {
        console.error(error);

        const message = 'Error fetching profile';

        throw new Error(message);
      }
    },
    select: (rawData): Set<string> => new Set(rawData?.skills),
  });
};

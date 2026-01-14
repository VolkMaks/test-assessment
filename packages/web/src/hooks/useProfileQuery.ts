import { useQuery } from '@tanstack/react-query';
import type { Profile } from '../types/Profile';
import { apiClient } from '../utils/apiClient';

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

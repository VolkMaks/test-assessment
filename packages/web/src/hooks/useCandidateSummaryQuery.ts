import { useQuery } from '@tanstack/react-query';
import type { CandidateSummary } from '../types/CandidateSummary';
import type { Skill } from '../types/Skill';
import type { Achievement } from '../types/Achievement';
import { apiClient } from '../utils/apiClient';

interface ParsedQueryData {
  summary: string;
  mainTechnologies: Skill[];
  additionalSkills: Skill[];
  achievements: Achievement[];
}

const QUERY_KEY = 'candidate_summary';

export const useCandidateSummaryQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      try {
        const response =
          await apiClient.get<CandidateSummary>('/candidate/summary');

        return response.data;
      } catch (error) {
        console.error(error);

        const message = 'Error fetching candidate summary';

        throw new Error(message);
      }
    },
    select: (rawData): ParsedQueryData => {
      const parsedData: ParsedQueryData = {
        summary: rawData?.profile.summary || '',
        mainTechnologies: [],
        additionalSkills: [],
        achievements: [],
      };

      rawData?.profile.skills.forEach(skill => {
        if (skill.main) {
          parsedData.mainTechnologies.push(skill);
        } else {
          parsedData.additionalSkills.push(skill);
        }
      });

      if (rawData?.profile.achievements) {
        parsedData.achievements = rawData?.profile.achievements;
      }

      return parsedData;
    },
  });
};

import { useQuery } from "@tanstack/react-query";
import type { CandidateSummary } from "../types/CandidateSummary";
import { useMemo } from "react";
import type { Skill } from "../types/Skill";
import type { Achievement } from "../types/Achievement";
import type { QueryResult } from "../types/QueryResult";

interface ParsedQueryData {
  summary: string;
  mainTechnologies: Skill[];
  additionalSkills: Skill[];
  achievements: Achievement[];
}

const QUERY_KEY = "candidate_summary";

export const useCandidateSummaryQuery = (): QueryResult<ParsedQueryData> => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const response = await fetch(
        "https://test-task-mock-api-pdbw.onrender.com/api/candidate/summary",
        {
          headers: {
            "Content-Type": "application/json",
            "auth-key": import.meta.env.REACT_APP_API_KEY,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const message = "Error fetching candidate summary";

        console.error({ message, data });

        throw new Error(message);
      }

      return data as CandidateSummary;
    },
  });

  const parsedData = useMemo(() => {
    const parsedData: ParsedQueryData = {
      summary: data?.profile.summary || "",
      mainTechnologies: [],
      additionalSkills: [],
      achievements: [],
    };

    data?.profile.skills.forEach((skill) => {
      if (skill.main) {
        parsedData.mainTechnologies.push(skill);
      } else {
        parsedData.additionalSkills.push(skill);
      }
    });

    if (data?.profile.achievements) {
      parsedData.achievements = data?.profile.achievements;
    }

    return parsedData;
  }, [data?.profile.achievements, data?.profile.skills, data?.profile.summary]);

  return {
    isLoading,
    error,
    parsedData,
    refetch,
  };
};

import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type { QueryResult } from "../types/QueryResult";
import type { Profile } from "../types/Profile";

const QUERY_KEY = "profile";

export const useProfileQuery = (): QueryResult<Set<string>> => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const response = await fetch(
        "https://test-task-mock-api-pdbw.onrender.com/api/profile",
        {
          headers: {
            "Content-Type": "application/json",
            "auth-key": import.meta.env.REACT_APP_API_KEY,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const message = "Error fetching profile";

        console.error({ message, data });

        throw new Error(message);
      }

      return data as Profile;
    },
  });

  const parsedData = useMemo(() => {
    return new Set(data?.skills);
  }, [data?.skills]);

  return {
    isLoading,
    error,
    parsedData,
    refetch,
  };
};

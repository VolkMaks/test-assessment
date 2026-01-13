export interface QueryResult<T> {
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
  parsedData: T;
}

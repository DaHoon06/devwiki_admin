import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@services/keys/queryKeys';
import { findQuizListsApi, QuizListRequestQuery } from 'src/services/apis/quiz';

export const useQuizLists = (query: QuizListRequestQuery) => {
  const { data, isLoading } = useQuery(
    [QueryKeys.useQuery.Quiz.Lists, query],
    () => findQuizListsApi(query),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    }
  );
  return { isLoading, data };
};

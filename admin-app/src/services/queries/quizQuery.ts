import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@services/keys/queryKeys';
import { findQuizListsApi, QuizListRequestQuery } from 'src/services/apis/quiz';
import toast from '@components/common/toast/ToastHandler';

export const useQuizLists = (query: QuizListRequestQuery) => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.useQuery.Quiz.Lists, query],
    queryFn: () => findQuizListsApi(query),
    onError: () => {},
  });
  return { isLoading, data };
};

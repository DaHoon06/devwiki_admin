import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@services/keys/queryKeys';
import {FindQuizListsApi, QuizListRequestQuery} from 'src/services/apis/quiz';

export const useQuizLists = (query: QuizListRequestQuery) => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.useQuery.Quiz.Lists, query],
    queryFn: () => FindQuizListsApi(query),
  });
  return { isLoading, data };
};

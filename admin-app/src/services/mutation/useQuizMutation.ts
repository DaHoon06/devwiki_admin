import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { QueryKeys } from '@services/keys/queryKeys';
import {
  deleteManyQuizApi,
  insertManyQuizApi,
  updateManyQuizApi,
} from '@services/apis/quiz';
import toast from '@components/common/toast/ToastHandler';
import { InsertQuizData, UpdateQuizData } from '@interfaces/Quiz';
import { queryClient } from '@libs/Tanstack';

export const useAddQuiz = (): UseMutateFunction<
  void,
  unknown,
  InsertQuizData[],
  unknown
> => {
  const { mutate } = useMutation({
    mutationFn: (quizData: InsertQuizData[]) => insertManyQuizApi(quizData),
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.useQuery.Quiz.Lists]);
      toast.message('퀴즈가 등록되었습니다.', 'success');
    },
    onError(e) {
      toast.message(`퀴즈 등록에 실패하였습니다 - ${e}`, 'error');
    },
  });
  return mutate;
};

export const useDeleteQuiz = (): UseMutateFunction<
  boolean,
  unknown,
  number[],
  unknown
> => {
  const { mutate } = useMutation({
    mutationFn: (quizIds: number[]) => deleteManyQuizApi(quizIds),
    onSuccess: async (payload: boolean) => {
      await queryClient.invalidateQueries([QueryKeys.useQuery.Quiz.Lists]);
      toast.message('퀴즈가 삭제 되었습니다.', 'success');
    },
    onError(e) {
      toast.message(`퀴즈 삭제에 실패하였습니다 - ${e}`, 'error');
    },
  });
  return mutate;
};

export const useUpdateQuiz = (): UseMutateFunction<
  void,
  unknown,
  UpdateQuizData[],
  unknown
> => {
  const { mutate } = useMutation({
    mutationFn: (quizData: UpdateQuizData[]) => updateManyQuizApi(quizData),
    onSuccess: async () => {
      await queryClient.invalidateQueries([QueryKeys.useQuery.Quiz]);
      toast.message(`퀴즈를 수정하였습니다.`, 'success');
    },
    onError(e) {
      toast.message(`퀴즈를 수정하는데 실패하였습니다 - ${e}`, 'error');
    },
  });
  return mutate;
};

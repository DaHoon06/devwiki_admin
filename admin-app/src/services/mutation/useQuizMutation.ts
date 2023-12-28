import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { QueryKeys } from '@services/keys/queryKeys';
import { queryClient } from '@libs/Tanstack';
import {
  deleteManyQuizApi,
  insertManyQuizApi,
  updateManyQuizApi,
} from '@services/apis/quiz';
import toast from '@components/common/toast/ToastHandler';
import { InsertQuizData, UpdateQuizData } from '@interfaces/Quiz';

export const useAddQuiz = (): UseMutateFunction<
  boolean,
  unknown,
  InsertQuizData[],
  unknown
> => {
  const { mutate } = useMutation({
    mutationKey: [QueryKeys.Mutation.Quiz.InsertMany],
    mutationFn: (quizData: InsertQuizData[]) => insertManyQuizApi(quizData),
    onSuccess: async (payload: boolean) => {
      await queryClient.invalidateQueries([QueryKeys.Mutation.Quiz.InsertMany]);
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
    mutationKey: [QueryKeys.Mutation.Quiz.DeleteMany],
    mutationFn: (quizIds: number[]) => deleteManyQuizApi(quizIds),
    onSuccess: async (payload: boolean) => {
      await queryClient.invalidateQueries([QueryKeys.Mutation.Quiz.DeleteMany]);
    },
    onError(e) {
      toast.message(`퀴즈 삭제에 실패하였습니다 - ${e}`, 'error');
    },
  });
  return mutate;
};

export const useUpdateQuiz = (): UseMutateFunction<
  boolean,
  unknown,
  UpdateQuizData[],
  unknown
> => {
  const { mutate } = useMutation({
    mutationKey: [QueryKeys.Mutation.Quiz.UpdateMany],
    mutationFn: (quizData: UpdateQuizData[]) => updateManyQuizApi(quizData),
    onSuccess: async (payload: boolean) => {
      await queryClient.invalidateQueries([QueryKeys.Mutation.Quiz.UpdateMany]);
    },
    onError(e) {
      toast.message(`퀴즈를 수정하는데 실패하였습니다 - ${e}`, 'error');
    },
  });
  return mutate;
};
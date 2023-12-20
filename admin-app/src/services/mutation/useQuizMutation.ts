import {UseMutateFunction, useMutation} from "@tanstack/react-query";
import {Quiz} from "@interfaces/Quiz";
import {QueryKeys} from "@services/keys/queryKeys";
import {queryClient} from "@libs/Tanstack";
import {InsertManyQuizApi} from "@services/apis/quiz";
import toast from "@components/common/toast/ToastHandler";

export const useAddQuiz = (): UseMutateFunction<boolean, unknown,Quiz.InsertData[], unknown> => {
  const {mutate} = useMutation({
    mutationKey: [QueryKeys.Mutation.Quiz.InsertMany],
    mutationFn: (quizData: Quiz.InsertData[]) => InsertManyQuizApi(quizData),
    onSuccess: async (payload: boolean) => {
      await queryClient.invalidateQueries([QueryKeys.Mutation.Quiz.InsertMany]);
    },
    onError(e) {
      toast.message(`퀴즈 등록에 실패하였습니다 - ${e}`, 'error');
    },
  });
  return mutate;
}
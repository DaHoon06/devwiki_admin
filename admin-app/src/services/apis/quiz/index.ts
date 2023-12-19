import { axiosInstance } from '@libs/Axios';

export type QuizListRequestQuery = {
  offset: number;
  limit: number
}

export const getQuizListsApi = async (query: QuizListRequestQuery) => {
  try {
    const { data } = await axiosInstance.get(
      `/admin/quizzes?offset=${query.offset}&limit=${query.limit}`
    );
    return data;
  } catch (e) {
    throw e;
  }
};

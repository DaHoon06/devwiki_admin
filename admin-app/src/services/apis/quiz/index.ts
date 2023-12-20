import { axiosInstance } from '@libs/Axios';
import {Quiz} from "@interfaces/Quiz";

export type QuizListRequestQuery = {
  offset: number;
  limit: number
}

export const FindQuizListsApi = async (query: QuizListRequestQuery) => {
  try {
    const { data } = await axiosInstance.get(
      `/admin/quizzes?offset=${query.offset}&limit=${query.limit}`
    );
    return data;
  } catch (e) {
    throw e;
  }
};

export const InsertManyQuizApi = async (quizData: Quiz.InsertData[]) => {
  try {
    const {data} = await axiosInstance.post(`/admin/quizzes`, quizData);
    return data;
  } catch (e) {
    throw e;
  }
}

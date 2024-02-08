import { axiosInstance } from '@libs/Axios';
import {InsertQuizData, QuizLists, UpdateQuiz, UpdateQuizData} from '@interfaces/Quiz';
import { responseDataConvert } from '@utils/convert';

export type QuizListRequestQuery = {
  page: number;
};

export const findQuizListsApi = async (
  query: QuizListRequestQuery
): Promise<QuizLists> => {
  try {
    const { data } = await axiosInstance.get(
      `/admin/quizzes?page=${query.page}`
    );
    if (data.success) return responseDataConvert<QuizLists>(data);
    return {
      totalElement: 0,
      totalPage: 0,
      hasNext: false,
      quizList: []
    };
  } catch (e) {
    throw e;
  }
};

export const insertManyQuizApi = async (quizData: InsertQuizData[]) => {
  try {
    const { data } = await axiosInstance.post(`/admin/quizzes`, quizData);
    return data;
  } catch (e) {
    throw e;
  }
};

export const updateManyQuizApi = async (quizData: UpdateQuizData[]) => {
  try {
    const { data } = await axiosInstance.patch('/admin/quizzes', quizData);
    return data;
  } catch (e) {
    throw e;
  }
};
export const deleteManyQuizApi = async (quizIds: number[]) => {
  try {
    const { data } = await axiosInstance.delete(`/admin/quizzes`, {
      data: quizIds,
    });
    return data;
  } catch (e) {
    throw e;
  }
};

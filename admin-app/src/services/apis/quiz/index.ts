import { axiosInstance } from '@libs/Axios';
import { InsertQuizData, UpdateQuizData } from '@interfaces/Quiz';

export type QuizListRequestQuery = {
  offset: number;
  limit: number;
};

//todo Get Body 제거
export const FindQuizListsApi = async (query: QuizListRequestQuery) => {
  try {
    const { data } = await axiosInstance.get(`/admin/quizzes`, {
      data: {
        offset: query.offset,
        limit: query.limit,
      },
    });
    return data;
  } catch (e) {
    throw e;
  }
};

export const InsertManyQuizApi = async (quizData: InsertQuizData[]) => {
  try {
    const { data } = await axiosInstance.post(`/admin/quizzes`, quizData);
    return data;
  } catch (e) {
    throw e;
  }
};

export const UpdateManyQuizApi = async (quizData: UpdateQuizData[]) => {
  try {
    const { data } = await axiosInstance.patch('/admin/quizzes', quizData);
    return data;
  } catch (e) {
    throw e;
  }
};
export const DeleteManyQuizApi = async (quizIds: number[]) => {
  try {
    const { data } = await axiosInstance.delete(`/admin/quizzes`, {
      data: quizIds,
    });
    return data;
  } catch (e) {
    throw e;
  }
};

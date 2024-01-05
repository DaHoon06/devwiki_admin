import { axiosInstance } from '@libs/Axios';
import { RequestSignIn } from '@interfaces/response.user';
import { responseDataConvert } from '@utils/convert';

export interface ResponseData {
  accessToken: string;
  refreshToken: string;
}

type Data = {
  data: ResponseData;
};

export interface ResponseSignIn {
  code: number;
  result: Data;
  success: boolean;
}

/**
 *
 * @param payload
 * @@description 로그인
 */
export const signInApi = async (payload: RequestSignIn) => {
  try {
    const { data } = await axiosInstance.post<ResponseSignIn>(
      '/sign-in/admin',
      payload
    );
    const result = responseDataConvert<ResponseData>(data);

    if (result) {
      const { accessToken, refreshToken } = result;
      return {
        accessToken,
        refreshToken,
      };
    }
    return null;
  } catch (e) {
    throw e;
  }
};

/**
 * @description 토큰 검사
 */
export const validateAccessTokenApi = async (): Promise<boolean> => {
  const { data } = await axiosInstance.get('/sign-in/refresh');
  return !data.success;
};

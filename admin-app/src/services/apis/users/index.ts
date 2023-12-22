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

export const SignInApi = async (payload: RequestSignIn) => {
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

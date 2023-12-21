import { axiosInstance } from '@libs/Axios';
import { RequestSignIn } from '@interfaces/response.user';

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
    const { data: tokens } = data.result;
    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  } catch (e) {
    throw e;
  }
};

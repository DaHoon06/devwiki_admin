import { axiosInstance } from '@libs/Axios';
import { RequestSignIn } from '@interfaces/response.user';
import { responseDataConvert } from '@utils/convert';
import axios from "axios";
import {PRODUCT_HOST_API} from "@config/index";

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
export const validateAccessTokenApi = async (refreshToken: string): Promise<{accessToken: string}> => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${refreshToken}`
  }
  const { data } = await axios.post(`${PRODUCT_HOST_API}/sign-in/refresh`, {}, {
    headers
  });
  const result = responseDataConvert<any>(data);
  if (result) {
    return {accessToken: result.accessToken}
  }
  return {accessToken: '',}
};

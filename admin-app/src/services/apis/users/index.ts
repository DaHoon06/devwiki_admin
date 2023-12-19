import { axiosInstance } from '@libs/Axios';
import {RequestSignIn} from "@interfaces/response.user";

export const SignInApi = async (payload: RequestSignIn) => {
  try {
    const { data } = await axiosInstance.post('/sign-in/admin', payload);
    return data;
  } catch (e) {
    throw e;
  }
};

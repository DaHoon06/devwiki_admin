import { axiosInstance } from '@libs/Axios';
import {RequestSignIn} from "@interfaces/response.user";
import {responseDataConvert} from "@utils/convert";
import toast from "@components/common/toast/ToastHandler";
import {UserKey} from "@type/storage.type";

export const SignInApi = async (payload: RequestSignIn) => {
  try {
    const { data } = await axiosInstance.post('/sign-in/admin', payload);
    if (data.result) return responseDataConvert<UserKey>(data);
    toast.message('로그인 정보가 유효하지 않습니다. 다시 로그인 해주세요.', 'error');
  } catch (e) {
    throw e;
  }
};

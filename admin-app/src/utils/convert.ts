interface ResponseBase<T> {
  success: boolean;
  result: T;
}

interface Data<T> {
  data: T;
}

interface ErrorMessage {
  message: string;
}

export type ResponseSuccess<T> = ResponseBase<Data<T>>;
export type ResponseError = ResponseBase<ErrorMessage>;

/**
 * @template T 제네릭 타입
 * @param {ResponseData<T>} payload
 * @description API 응답 데이터 변환
 */
export const responseDataConvert = <T>(payload: ResponseSuccess<T>): T => {
  const { result } = payload;
  return result.data;
};

/**
 * @param {ResponseError} payload
 * @description API 응답 데이터 변환
 */
export const responseError = (payload: ResponseError): string => {
  const { result } = payload;
  return result.message;
};

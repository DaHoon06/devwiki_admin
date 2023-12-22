export interface ResponseData<T> {
  success: boolean;
  result: {
    data: T;
  };
}

/**
 * @param payload
 * @description API 응답 데이터 변환
 */
export const responseDataConvert = <T>(
  payload: ResponseData<T>
): T | undefined => {
  const { success } = payload;
  // API 호출 성공
  if (success) {
    const { result } = payload;
    return result.data;
  }
};

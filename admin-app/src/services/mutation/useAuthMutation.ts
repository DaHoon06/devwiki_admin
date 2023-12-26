// import useLocalStorage from '@hooks/useLocalStorage';
// import { QueryKeys } from '@services/keys/queryKeys';
// import { ResponseData, SignInApi } from '../apis/users';
// import { queryClient } from '@libs/Tanstack';
// import { UseMutateFunction, useMutation } from '@tanstack/react-query';
// import { UserKey } from '@type/storage.type';
// import { RequestSignIn } from '@interfaces/response.user';
// import { STORAGE_USER_KEY } from '@providers/authProvider';
//
// export const useSignIn = (): UseMutateFunction<
//   ResponseData,
//   unknown,
//   RequestSignIn,
//   unknown
// > => {
//   const { setStorageItems } = useLocalStorage<ResponseData>();
//   const { mutate } = useMutation({
//     mutationKey: [QueryKeys.Mutation.SignIn],
//     mutationFn: (loginData: RequestSignIn) => SignInApi(loginData),
//     onSuccess: async (payload: ResponseData) => {
//       setStorageItems(STORAGE_USER_KEY, payload);
//       await queryClient.invalidateQueries([QueryKeys.Mutation.SignIn]);
//     },
//     onError() {
//       console.log('LOGIN ERROR');
//     },
//   });
//   return mutate;
// };
export {}

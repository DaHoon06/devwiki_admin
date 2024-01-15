import useLocalStorage from '@hooks/useLocalStorage';
import React, { ReactNode, useState } from 'react';
import { RequestSignIn } from '@interfaces/response.user';
import {
  ResponseData,
  signInApi,
  validateAccessTokenApi,
} from '@services/apis/users';

type AuthContextType = {
  tokens: ResponseData | null;
  signIn: (loginData: RequestSignIn) => void;
  signOut: () => void;
  validateToken: () => void;
  expiredToken: boolean;
};
export const STORAGE_USER_KEY = 'user' as const;
export const STORAGE_TOKEN_KEY = 'tokens' as const;
export const AuthContext = React.createContext<AuthContextType>(null!);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { getStorageItems, removeStorageItems, setStorageItems } =
    useLocalStorage<ResponseData>();
  const [tokens, setTokens] = useState(getStorageItems(STORAGE_TOKEN_KEY));
  const [expiredToken, setExpiredToken] = useState(false);

  const signOut = () => {
    setTokens(null);
    removeStorageItems(STORAGE_TOKEN_KEY);
    setExpiredToken(true);
  };

  const signIn = async (loginData: RequestSignIn) => {
    const payload = await signInApi(loginData);
    if (!payload) throw new Error('로그인 정보를 다시 확인해 주세요.');
    setStorageItems(STORAGE_TOKEN_KEY, payload);
    setTokens(payload);
  };

  const validateToken = async (): Promise<void> => {
    const refreshToken = tokens?.refreshToken;
    if (refreshToken) {
      const { accessToken } = await validateAccessTokenApi(refreshToken);
      if (!accessToken || accessToken.length === 0) {
        signOut();
      } else {
        const payload = {
          accessToken,
          refreshToken,
        };
        setTokens(payload);
        setStorageItems(STORAGE_TOKEN_KEY, payload);
        setExpiredToken(false);
      }
    }
  };

  const value = {
    signIn,
    signOut,
    validateToken,
    tokens,
    expiredToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

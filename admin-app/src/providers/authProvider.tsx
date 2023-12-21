import useLocalStorage from '@hooks/useLocalStorage';
import React, { ReactNode, useState } from 'react';
import { RequestSignIn } from '@interfaces/response.user';
import { ResponseData, SignInApi } from '@services/apis/users';

type AuthContextType = {
  user: ResponseData | null;
  signIn: (loginData: RequestSignIn) => void;
  signOut: () => void;
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
  const [user, setUser] = useState(getStorageItems(STORAGE_TOKEN_KEY));

  const signOut = () => {
    setUser(null);
    removeStorageItems(STORAGE_USER_KEY);
  };

  const signIn = async (loginData: RequestSignIn) => {
    const payload = await SignInApi(loginData);
    setStorageItems(STORAGE_TOKEN_KEY, payload);
    setUser(payload);
  };

  const value = {
    signIn,
    signOut,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

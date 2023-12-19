import useLocalStorage from '@hooks/useLocalStorage';
import React, { ReactNode, useState } from 'react';
import { UserKey } from '@type/storage.type';
import { RequestSignIn } from '@interfaces/response.user';
import { SignInApi } from '@services/apis/users';

type AuthContextType = {
  user: UserKey | null;
  signIn: (loginData: RequestSignIn) => void;
  signOut: () => void;
};
export const STORAGE_USER_KEY = 'user' as const;

export const AuthContext = React.createContext<AuthContextType>(null!);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { getStorageItems, removeStorageItems, setStorageItems } =
    useLocalStorage<UserKey>();
  const [user, setUser] = useState(getStorageItems(STORAGE_USER_KEY));

  const signOut = () => {
    setUser(null);
    removeStorageItems(STORAGE_USER_KEY);
  };

  const signIn = async (loginData: RequestSignIn) => {
    const payload = await SignInApi(loginData);
    setStorageItems(STORAGE_USER_KEY, payload);
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

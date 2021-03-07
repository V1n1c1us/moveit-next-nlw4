import React, {
  createContext, ReactNode, useCallback, useEffect, useState,
} from 'react';

import {
  signIn as handleOAuthLogin,
  signOut as handleOAuthLogout,
  useSession,
} from 'next-auth/client';
import Cookies from 'js-cookie';

interface UserAuthContextData {
    signIn: () => void;
    signOut: () => void;
}

type UserAuthProviderProps = {
  children: ReactNode;
}

export const UserAuthContext = createContext({} as UserAuthContextData);

export function UserAuthProvider({ children }: UserAuthProviderProps) {
  const [session] = useSession();
  console.log(session);
  const signIn = useCallback(() => {
    console.log('asdasd');
    handleOAuthLogin('github');
  }, []);

  const signOut = useCallback(() => {
    handleOAuthLogout({ callbackUrl: process.env.NEXTAUTH_URL });
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        signIn,
        signOut,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

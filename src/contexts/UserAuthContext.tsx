import { useRouter } from 'next/router';
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import Cookies from 'js-cookie';
import api from '../services/api';

type UserAuthContextData = {
    avatar: string;
    error: string;
    isLogged: boolean;
    logoutUser: () => void;
    setUserAuth: (event) => void;
    user: string;
}

type UserAuthProviderProps = {
  children: ReactNode;
}

export const UserAuthContext = createContext({} as UserAuthContextData);

export function UserAuthProvider({ children }: UserAuthProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (Cookies.get('isLogged') === 'true') {
      setIsLogged(true);
      setAvatar(Cookies.get('avatar'));
      setUser(Cookies.get('user'));
    } else {
      setIsLogged(false);
    }
  }, []);

  const userAuth = useCallback((userName: string) => {
    api.get(`users/${userName}`).then((response) => {
      Cookies.set('isLogged', 'true');
      Cookies.set('user', response.data.name);
      Cookies.set('avatar', response.data.avatar_url);

      setUser(response.data.name);
      setAvatar(response.data.avatar_url);
      router.push('/dashboard');
    });
  }, [router]);

  const setUserAuth = (event) => {
    const userName = event.nativeEvent.path[2].childNodes[0].value;
    if (userName) {
      setError('');
      userAuth(userName);
      new Notification('🖖', {
        body: `Bem-vindo ${userName}`,
      });
    } else {
      setError('Usuário não encontrado!');
    }
  };

  const logoutUser = useCallback(() => {
    if (Cookies.get('isLogged') === 'true') {
      Cookies.set('isLogged', 'false');
      setIsLogged(false);

      new Notification('👋', {
        body: 'Volte logo para encarar novos desafios',
      });

      router.push('/');
    }
  }, [router]);

  return (
    <UserAuthContext.Provider
      value={{
        avatar,
        error,
        isLogged,
        logoutUser,
        setUserAuth,
        user,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

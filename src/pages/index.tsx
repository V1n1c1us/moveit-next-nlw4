import Head from 'next/head';

import { useContext } from 'react';
import { useSession } from 'next-auth/client';
import styles from '../styles/pages/SingIn.module.css';
import Dashboard from './dashboard';

import { UserAuthContext } from '../contexts/UserAuthContext';

export default function SingIn() {
  const { signIn } = useContext(UserAuthContext);
  const [session] = useSession();

  return (
    <>
      {session ? (
        <Dashboard />
      ) : (
        <div className={styles.container}>

          <Head>
            <title>Início | move.it</title>
          </Head>

          <div className={styles.background} />

          <div className={styles.content}>
            <img src="icons/logo-white.svg" className={styles.bgimage} alt="" />

            <p>Bem-vindo</p>
            <div className={styles.text}>
              <span>Faça login com seu Github para começar</span>
            </div>
            <div />
            <div className={styles.inputForm}>
              {/* <input type="text" name="user" placeholder="Digite seu username" required /> */}
              <button type="submit" onClick={signIn}>
                <img src="icons/github.svg" className={styles.bgimage} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

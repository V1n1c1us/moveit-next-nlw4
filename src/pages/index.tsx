import Head from 'next/head';
import { useContext } from 'react';

import { UserAuthContext } from '../contexts/UserAuthContext';

import styles from '../styles/pages/SingIn.module.css';

export default function SingIn() {
  const { setUserAuth, error } = useContext(UserAuthContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <div className={styles.background} />

      <div className={styles.content}>
        <img src="icons/logo-white.svg" className={styles.bgimage} alt="" />

        <p>Bem-vindo</p>
        <div className={styles.text}>
          <img src="icons/github.svg" className={styles.bgimage} alt="" />
          <span>Faça login com seu Github para começar</span>
        </div>

        <div className={styles.inputForm}>
          <input type="text" name="user" placeholder="Digite seu username" required />
          <button type="submit" onClick={setUserAuth}>
            <img src="icons/arrow-right.svg" alt="SingIn" />
          </button>
        </div>
        <span className={styles.error}>{error}</span>
      </div>
    </div>
  );
}

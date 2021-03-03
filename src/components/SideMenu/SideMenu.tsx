import Link from 'next/link';

import { useContext } from 'react';
import { UserAuthContext } from '../../contexts/UserAuthContext';

import styles from '../../styles/components/SideMenu.module.css';

const SideMenu = () => {
  const { logoutUser } = useContext(UserAuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="icons/logo.svg" alt="Move.it" />
      </div>

      <div className={styles.menuItens}>

        <ul>
          <li className={styles.item}>
            <Link href="/dashboard">
              <a><img src="icons/home-icon.svg" alt="Home" /></a>
            </Link>
          </li>
          <li className={styles.item}>
            <a href="#" onClick={logoutUser}>
              <img src="icons/award.svg" alt="Ranking" />
            </a>
          </li>
          <li className={styles.item}>
            <button type="submit" onClick={logoutUser}>
              <img src="icons/logout.svg" alt="Ranking" />
            </button>
          </li>
        </ul>
        <div />
      </div>
    </div>
  );
};

export default SideMenu;

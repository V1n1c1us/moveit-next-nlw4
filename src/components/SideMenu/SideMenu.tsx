import Link from 'next/link';
import { signOut } from 'next-auth/client';
import styles from '../../styles/components/SideMenu.module.css';

const SideMenu = () => (
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
          <a href="#">
            <img src="icons/award.svg" alt="Ranking" />
          </a>
        </li>
        <li className={styles.item}>
          <a href="/api/auth/signout" onClick={() => signOut({ callbackUrl: 'localhost:3000/' })}>
            <img src="icons/logout.svg" alt="Ranking" />
          </a>
        </li>
      </ul>
      <div />
    </div>
  </div>
);
export default SideMenu;

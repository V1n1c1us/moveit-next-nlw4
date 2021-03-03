import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { UserAuthContext } from '../../contexts/UserAuthContext';

import styles from '../../styles/components/Profile.module.css';

const Profile = () => {
  const { level } = useContext(ChallengesContext);
  const { user, avatar } = useContext(UserAuthContext);

  return (
    <div className={styles.profileContainer}>
      <img src={avatar} alt={user} />
      <div>
        <strong>{user}</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon" />
          Level
          {' '}
          {level}
        </p>
      </div>
    </div>
  );
};
export default Profile;

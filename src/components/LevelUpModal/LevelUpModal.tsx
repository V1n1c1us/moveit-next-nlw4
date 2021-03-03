import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { TwitterSharedButton } from '..';

import styles from '../../styles/components/LevelUpModal.module.css';

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.levelUpModalOverlay}>
      <div className={styles.levelUpModalContainer}>
        <div className={styles.levelUpModalWrapper}>
          <header>
            {level}
          </header>
          <strong>Prabéns</strong>
          <p>Você alcançou um novo level.</p>
          <button type="button" onClick={closeLevelUpModal}>
            <img src="icons/close.svg" alt="" />
          </button>
        </div>
        <TwitterSharedButton />
      </div>
    </div>
  );
};

export default LevelUpModal;

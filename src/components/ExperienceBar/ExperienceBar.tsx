import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from '../../styles/components/ExperienceBar.module.css';

const ExpericencBart = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>
        {currentExperience}
        xp
      </span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        {percentToNextLevel >= 1 && (
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience}
          xp
        </span>
        )}

      </div>
      <span>
        {experienceToNextLevel}
        px
      </span>
    </header>
  );
};

export default ExpericencBart;

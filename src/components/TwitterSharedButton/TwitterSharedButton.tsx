import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from '../../styles/components/TwitterSharedButton.module.css';

const TwitterSharedButton = () => {
  const { level } = useContext(ChallengesContext);

  const textToTwwet = `Parabéns! Você alcançou um novo level: ${level}.`;
  return (
    <div className={styles.container}>
      <a href={`https://twitter.com/intent/tweet?text=${textToTwwet}&hashtags=moveit,nlw4,rocketseat`}>
        <span>Compartilhar no Twitter</span>
        <img src="icons/twitter.svg" alt="Shared on Twitter" />
      </a>
    </div>
  );
};

export default TwitterSharedButton;

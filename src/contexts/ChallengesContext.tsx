import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import Cookies from 'js-cookie';
import { LevelUpModal } from '../components';

import challenges from '../utils/challenges.json';

type Challenge = {
    amount: number;
    description: string;
    type: 'body' | 'eye';
}
type ChallengesContextData = {
    activeChallenge: Challenge;
    challengesCompleted: number;
    closeLevelUpModal: () => void;
    completedChallenge: () => void;
    currentExperience: number;
    experienceToNextLevel: number;
    level: number;
    levelUp: () => void;
    resetChallenge: () => void;
    startNewChallenge: () => void;
}

type ChallengesProviderProps = {
    challengesCompleted: number;
    children: ReactNode;
    currentExperience: number;
    level: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLeve] = useState(rest.level ?? 1);
  const [currentExperience, setCurrenceExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  const levelUp = () => {
    setLeve(level + 1);
    setIsLevelUpModalOpen(true);
  };

  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🔔', {
        body: `Valendo ${challenge.amount} xp`,
      });
    }
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completedChallenge = () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrenceExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        activeChallenge,
        challengesCompleted,
        closeLevelUpModal,
        completedChallenge,
        currentExperience,
        experienceToNextLevel,
        level,
        levelUp,
        resetChallenge,
        startNewChallenge,
      }}
    >
      {children}

      {isLevelUpModalOpen && (
        <LevelUpModal />
      )}
    </ChallengesContext.Provider>
  );
}

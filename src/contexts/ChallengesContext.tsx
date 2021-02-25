import { type } from 'os';
import { createContext, useState, ReactNode } from 'react';
import challenges from '../utils/challenges.json';

type Challenge = {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
type ChallengesContextData = {
    activeChallenge: Challenge,
    challengesCompleted: number;
    currentExperience: number;
    experienceToNextLevel: number,
    level: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void,
}

type ChallengesProviderProps = {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLeve] = useState(0);
    const [currentExperience, setCurrenceExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
    
    const levelUp = () => {
        setLeve(level + 1);
    }

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    };

    const resetChallenge = () => {
        setActiveChallenge(null);
    }

    return (
        <ChallengesContext.Provider
            value={{
                activeChallenge,
                challengesCompleted,
                experienceToNextLevel,
                currentExperience,
                level,
                levelUp,
                startNewChallenge,
                resetChallenge,
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}
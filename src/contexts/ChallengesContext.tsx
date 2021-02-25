import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import challenges from '../utils/challenges.json';

type Challenge = {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
type ChallengesContextData = {
    activeChallenge: Challenge;
    challengesCompleted: number;
    currentExperience: number;
    experienceToNextLevel: number;
    level: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
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

    useEffect(() => {
        Notification.requestPermission();
    }, []);
    
    const levelUp = () => {
        setLeve(level + 1);
    }

    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted') {
            new Notification('Novo desafio 🔔', {
                body: `Valendo ${challenge.amount} xp`
            });
        }
    };

    const resetChallenge = () => {
        setActiveChallenge(null);
    }

    const completedChallenge = () =>{
        if(!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrenceExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1)
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
                completedChallenge,
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}
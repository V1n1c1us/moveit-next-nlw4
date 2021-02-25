import { createContext, useState, ReactNode } from 'react';



interface ChallengesContextData {
    challengesCompleted: number;
    currentExperience: number;
    level: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}

type ChallengesProviderProps = {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLeve] = useState(0);
    const [currentExperience, setCurrenceExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    
    const levelUp = () => {
        setLeve(level + 1);
    }

    const startNewChallenge = () => {
        console.log('NEW CHALLENGE');
    };

    return (
        <ChallengesContext.Provider
            value={{
                challengesCompleted,
                currentExperience,
                level,
                levelUp,
                startNewChallenge,
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}
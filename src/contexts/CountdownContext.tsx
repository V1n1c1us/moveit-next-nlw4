import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ChallengesContext } from './ChallengesContext';

type CountdownContextData = {
    hasFinished: boolean;
    isActive: boolean;
    minutes: number;
    resetCountDown: () => void;
    seconds: number;
    startCountDown: () => void;
}

type CountdownProviderProps = {
    children: ReactNode;
}

let countDownTimeOut: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const initialTime = 0.1 * 10;
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, startNewChallenge]);

  const startCountDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountDown = useCallback(() => {
    clearTimeout(countDownTimeOut);
    setIsActive(false);
    setTime(initialTime);
    setHasFinished(false);
  }, [initialTime]);

  return (
    <CountdownContext.Provider
      value={{
        hasFinished,
        isActive,
        minutes,
        resetCountDown,
        seconds,
        startCountDown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

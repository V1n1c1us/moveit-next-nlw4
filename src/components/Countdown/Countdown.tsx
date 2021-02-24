import { useCallback, useEffect, useState } from 'react';
import styles from '../../styles/components/Countdown.module.css';

let countDownTimeOut: NodeJS.Timeout;

const Countdown = () => {
    const initialTime = 0.1 * 60;
    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
   
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    
    useEffect(() => {
        if(isActive && time > 0) {
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]);

    const startCountDown = useCallback(() => {
        setIsActive(true);
    }, []);

    const resetCountDown = useCallback(() => {
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(initialTime);
    }, []);

    return (
        <div>
					<div className={styles.countdownContainer}>
						<div>
							<span>{minuteLeft}</span>
							<span>{minuteRight}</span>
						</div>
						<span>:</span>
						<div>
							<span>{secondLeft}</span>
							<span>{secondRight}</span>
						</div>
					</div>

        { hasFinished ? (
					<button
					disabled
					type="button"
					className={styles.countdownButton}
        >
					Ciclo encerrado
        </button>
        ) : (
					<>
						{ isActive ? (
							<button
									type="button"
									className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
									onClick={resetCountDown}
							>
									Abandonar Ciclo
							</button>
						) : (
							<button
									type="button"
									className={styles.countdownButton}
									onClick={startCountDown}
							>
									Iniciar um Ciclo
							</button>
						)}
					</>
        )}

        
    </div>
    )
};

export default Countdown;
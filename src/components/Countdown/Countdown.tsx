import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Countdown.module.css';

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
          <img src="icons/check-circle.svg" alt="Checked" />
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
              <img src="icons/close.svg" alt="Close" />
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
  );
};

export default Countdown;

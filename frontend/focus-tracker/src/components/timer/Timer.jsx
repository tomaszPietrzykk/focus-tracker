import React, {useEffect} from "react";
import styles from './css/Timer.module.css'

const Timer = ({ setIsOpen, isRunning, setIsRunning, elapsedTimeInSeconds, setElapsedTimeInSeconds, handleReset}) => {

  const handleStart = () => {
    setIsRunning(true);
    setIsOpen(false);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) return;

    const internalId = setInterval(() => {
      setElapsedTimeInSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(internalId);
  }, [isRunning, setElapsedTimeInSeconds]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return padTime(hours) + ":" + padTime(minutes) + ":" + padTime(seconds);
  };

  const padTime = (time) => String(time).padStart(2, "0");

  return (
    <div className={styles.container}>
      <h3>Timer</h3>
      <p className={styles.timer}>{formatTime(elapsedTimeInSeconds)}</p>
      {isRunning && (
        <button className={`${styles.button} ${styles.stop}`} onClick={handleStop}>
          STOP
        </button>
      )}
      {!isRunning && (
        <button className={`${styles.button} ${styles.start}`} onClick={handleStart}>
          START
        </button>
      )}
      {!isRunning && (
        <button className={`${styles.button} ${styles.reset}`} onClick={handleReset}>
          RESET
        </button>
      )}
    </div>
  );
};

export default Timer;

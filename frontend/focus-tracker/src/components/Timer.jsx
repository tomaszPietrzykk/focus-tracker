import React, { useEffect, useState } from "react";

const Timer = ({setIsOpen, isRunning, setIsRunning}) => {

    const [elapsedTimeInSeconds, setElapsedTimeInSeconds] = useState(0);

    const handleStart = () => {
        setIsRunning(true);
        setIsOpen(false);
    }

    const handleStop = () => {
        setIsRunning(false);
    }

    const handleReset = () => {
        setElapsedTimeInSeconds(0)
    }

    useEffect(() => {
        if (!isRunning) return;

        const internalId = setInterval(() => {
            setElapsedTimeInSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(internalId);
        }
    }, [isRunning])

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;


        return padTime(hours) + ":" + padTime(minutes) + ":" + padTime(seconds)
    }

    const padTime = (time) => {
        return String(time).padStart(2, "0");
    }

    return (
        <>
            <div>
                <h3>Timer</h3>
                <p>{formatTime(elapsedTimeInSeconds)}</p>
                {isRunning && <button onClick={handleStop}>STOP</button>}
                {!isRunning && <button onClick={handleStart}>START</button>}
                {!isRunning && <button onClick={handleReset}>RESET</button>}
            </div>
        </>
    )
}

export default Timer;
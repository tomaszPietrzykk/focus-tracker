import React, {useEffect} from "react";
import styles from './css/Timer.module.css'
import {Box, Button} from "@mui/material";
import { formatTime } from '../utils/timeUtils';

const Timer = ({setIsOpen, isRunning, setIsRunning, elapsedTimeInSeconds, setElapsedTimeInSeconds, handleReset}) => {

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

    return (
        <Box className={styles.container}>
            <h3>Timer</h3>
            <p className={styles.timer}>{formatTime(elapsedTimeInSeconds)}</p>
            {isRunning && (
                <Button
                    onClick={handleStop}
                    variant="outlined"
                >
                    STOP
                </Button>
            )}
            {!isRunning && (
                <Button
                    onClick={handleStart}
                    variant="outlined"
                    sx = {{marginTop: "0.5em", background: "#4caf50", color: "white", border: "none"}}
                    // todo hover effect can be added
                >
                    START
                </Button>
            )}
            {!isRunning && (
                <Button
                    sx = {{marginTop: "0.5em", backgroundColor: "#f44336", color: "white", border: "none"}}
                    onClick={handleReset}
                    variant="outlined"
                >
                    RESET
                </Button>
            )}
        </Box>
    );
};

export default Timer;

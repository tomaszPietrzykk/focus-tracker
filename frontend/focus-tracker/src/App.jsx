import {useState} from 'react'
import './App.css'
import ActivitySelector from './components/activity/ActivitySelector.jsx'
import Timer from './components/timer/Timer';
import SaveButton from "./components/savebutton/SaveButton.jsx";
import axios from 'axios';
import {Box} from "@mui/material";
import { formatTime } from './components/utils/TimeUtils.jsx';

function App() {

    const activities = ["nauka", "gitara", "czytanie"];
    const [focusSessions, setFocusSessions] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTimeInSeconds, setElapsedTimeInSeconds] = useState(59);
    const [activeActivity, setActiveActivity] = useState(activities[0])

    const handleReset = () => {
        setElapsedTimeInSeconds(0);
    };

    const updateSummary = () => {
        axios.get('http://localhost:8080/api/focus-sessions')
            .then(response => {
                setFocusSessions(response.data);
            })
            .catch(error => {
                console.error('Error fetching focus sessions:', error);
            });
    }

    return (
        <>
            <Box sx={{
                width: "40%",
                height: "auto",
                borderRadius: 1,
            }}>
                <ActivitySelector
                    isTimerRunning={isRunning}
                    activities={activities}
                    activeActivity={activeActivity}
                    setActiveActivity={setActiveActivity}
                    handleReset={handleReset}
                />
                <Timer
                    isRunning={isRunning}
                    setIsRunning={setIsRunning}
                    elapsedTimeInSeconds={elapsedTimeInSeconds}
                    setElapsedTimeInSeconds={setElapsedTimeInSeconds}
                    handleReset={handleReset}
                />
                {
                    !isRunning &&
                    elapsedTimeInSeconds > 0 &&
                    <SaveButton
                        activity={activeActivity}
                        elapsedTimeInSeconds={elapsedTimeInSeconds}
                        handleReset={handleReset}
                        updateSummary={updateSummary}
                    />
                }
                <ul>
                    {focusSessions.map((session, index) => (
                        <li key={index}>
                            {session.activityName} &ndash; {formatTime(session.durationInSeconds)} sek.
                        </li>
                    ))}
                </ul>
            </Box>
        </>
    )
}

export default App

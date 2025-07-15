import {useState} from 'react'
import './App.css'
import ActivitySelector from './components/activity/ActivitySelector.jsx'
import Timer from './components/timer/Timer';
import SaveButton from "./components/savebutton/SaveButton.jsx";
import axios from 'axios';
import {Button} from "@mui/material";

function App() {

    const activities = ["nauka", "gitara", "czytanie"];
    const [focusSessions, setFocusSessions] = useState([]);

    const [isOpen, setIsOpen] = useState(true)
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTimeInSeconds, setElapsedTimeInSeconds] = useState(0);
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
            <Button variant="text">Text</Button>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "8px",
                border: "4px solid black",
                padding: "0.6em 1.2em",
                height: "25em",
                width: "25em"
            }}>
                <ActivitySelector
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    isTimerRunning={isRunning}
                    activities={activities}
                    activeActivity={activeActivity}
                    setActiveActivity={setActiveActivity}
                    handleReset={handleReset}
                />
                <Timer
                    setIsOpen={setIsOpen}
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
            </div>
            <ul>
                {focusSessions.map((session, index) => (
                    <li key={index}>{session}</li>
                ))}
            </ul>
        </>
    )
}

export default App

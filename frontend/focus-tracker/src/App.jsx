import {useState} from 'react'
import './App.css'
import ActivitySelector from './components/activity/ActivitySelector.jsx'
import Timer from './components/timer/Timer';
import SaveButton from "./components/savebutton/SaveButton.jsx";

function App() {

    const activities = ["nauka", "gitara", "czytanie"];

    const [isOpen, setIsOpen] = useState(true)
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTimeInSeconds, setElapsedTimeInSeconds] = useState(0);
    const [activeActivity, setActiveActivity] = useState(activities[0])

    const handleReset = () => {
        setElapsedTimeInSeconds(0);
    };

    return (
        <>
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
                    />
                }
            </div>
        </>
    )
}

export default App

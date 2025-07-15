import axios from "axios";

const SaveButton = ({activity, elapsedTimeInSeconds, handleReset, updateSummary}) => {

    const handleClick = () => {
        alert("Saved")
        axios.post('http://localhost:8080/api/focus-sessions', {
            activityName: activity,
            durationInSeconds: elapsedTimeInSeconds
        })
            .then(() => {
                handleReset()
                updateSummary()
            })
    }

    return (
        <>
            <button onClick={handleClick}>Save</button>
        </>
    )
}

export default SaveButton;
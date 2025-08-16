import axios from "axios";
import {Alert, Button} from "@mui/material";
import {useState} from "react";

const SaveButton = ({activity, elapsedTimeInSeconds, handleReset, updateSummary}) => {

    const [error, setError] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [sentSuccessfully, setSentSuccessfully] = useState(false);

    const handleClick = () => {
        setError(false)
        setIsSending(true)
        axios.post('http://localhost:8080/api/focus-sessions', {
            uuid: crypto.randomUUID(),
            activityName: activity,
            durationInSeconds: elapsedTimeInSeconds
        })
            .then(() => {
                handleReset()
                updateSummary()
                setSentSuccessfully(true);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setIsSending(false)
            })
    }

    return (
        <>
            <Button
                sx={{marginTop: "1em", width: "100%"}}
                variant="contained"
                loading={isSending}
                onClick={handleClick}
            >
                Save
            </Button>
            {sentSuccessfully && (
                <Alert
                    sx={{marginTop: "1em"}}
                    severity="success"
                    onClose={() => {
                        setSentSuccessfully(false)
                    }}>
                    Session saved successfully!
                </Alert>
            )}
            {error && (
                <Alert
                    sx={{marginTop: "1em", marginBottom: "1em"}}
                    severity="error"
                    onClose={() => {
                        setError(false)
                    }}>
                    An error occurred while saving the session. Please try again.
                </Alert>
            )}
        </>
    )
}

export default SaveButton;
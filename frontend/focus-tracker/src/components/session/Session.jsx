import {formatTime} from "../utils/TimeUtils.jsx";
import ListItemText from "@mui/material/ListItemText";

const Session = ({activityName, durationInSeconds}) => {

    return (
        <>
            <ListItemText primary={`${activityName} ${formatTime(durationInSeconds)}`} />
        </>
    )

}

export default Session;
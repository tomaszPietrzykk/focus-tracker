import {formatTime} from "../utils/TimeUtils.jsx";

const Session = ({activityName, durationInSeconds}) => {

    return (
        <>
            {activityName} &ndash; {formatTime(durationInSeconds)} sek.
        </>
    )

}

export default Session;
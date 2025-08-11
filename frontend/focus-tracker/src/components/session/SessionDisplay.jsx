import Session from "./Session.jsx";

const SessionDisplay = ({focusSessions}) => {

    return (
        <>
            <ul>
                {focusSessions.map((session, index) => (
                    <li key={index}>
                        <Session activityName = {session.activityName} durationInSeconds={session.durationInSeconds}/>
                    </li>
                ))}
            </ul>
        </>
    )

}

export default SessionDisplay;
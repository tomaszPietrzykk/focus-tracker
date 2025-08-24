import ActivityList from "./ActivityList.jsx"
import AddActivityButton from "./AddActivityButton.jsx";


const ActivitySelector = ({
                              activities,
                              setActivitiesList,
                              isTimerRunning,
                              activeActivity,
                              setActiveActivity,
                              handleReset
                          }) => {

    const handleSelect = (event) => {
        setActiveActivity(event.target.value)
        handleReset()
    }

    return (

        <div style={{display: "flex", width: "100%"}}>
            <ActivityList
                isTimerRunning={isTimerRunning}
                setActivitiesList={setActivitiesList}
                activities={activities}
                onSelect={handleSelect}
                activeActivity={activeActivity}
            />
            <AddActivityButton />
        </div>
    )
}

export default ActivitySelector
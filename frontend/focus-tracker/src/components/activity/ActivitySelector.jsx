import ActivityList from "./ActivityList.jsx"

const ActivitySelector = ({
                              activities,
                              setActivitiesList,
                              isTimerRunning,
                              activeActivity,
                              setActiveActivity,
                              handleReset
                          }) => {

    const handleSelect = (event) => {
        console.log(event)
        setActiveActivity(event.target.value)
        handleReset()
    }

    return (
        <div>
            <div>
                <ActivityList
                    isTimerRunning={isTimerRunning}
                    setActivitiesList={setActivitiesList}
                    activities={activities}
                    onSelect={handleSelect}
                    activeActivity={activeActivity}
                />
            </div>
        </div>
    )
}

export default ActivitySelector
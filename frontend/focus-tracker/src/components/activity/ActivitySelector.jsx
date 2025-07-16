import ActivityList from "./ActivityList.jsx"

const ActivitySelector = ({
                              activities,
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
                    activities={activities}
                    onSelect={handleSelect}
                    activeActivity={activeActivity}
                />
            </div>
        </div>
    )
}

export default ActivitySelector
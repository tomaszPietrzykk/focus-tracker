import Activity from "./Activity.jsx"

const ActivityList = ({ activities , onSelect, activeActivity}) => {

    return (
        <>
            {activities.map((category) => (
                <Activity
                    key={category}
                    name={category}
                    isActive={category === activeActivity}
                    onClick={() => onSelect(category)}
                />
            ))}
        </>
    )
}

export default ActivityList
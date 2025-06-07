import ActivityList from "./ActivityList.jsx"
import styles from './css/ActivitySelector.module.css'


const ActivitySelector = ({
                              activities,
                              setIsOpen, isOpen,
                              isTimerRunning,
                              activeActivity,
                              setActiveActivity,
                              handleReset
}) => {

    const handleSelect = (category) => {
        setActiveActivity(category)
        setIsOpen(false)
        handleReset()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.categoryBox}>
                {isOpen &&
                    <ActivityList
                        activities={activities}
                        onSelect={handleSelect}
                        activeCategory={activeActivity}
                    />
                }

                {!isOpen && activeActivity}
            </div>
            {!isTimerRunning &&

                <button
                    className={styles.toggleButton}
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    ^
                </button>
            }
        </div>
    )
}

export default ActivitySelector
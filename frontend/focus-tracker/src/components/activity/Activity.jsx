import styles from './css/Activity.module.css'

const Activity = ({ name, onClick, isActive }) => {

    return (
        <>
            <button
                onClick={onClick}
                className={`${styles.button} ${isActive ? styles.active : ''}`}
            >
                {name}
            </button>
        </>
    )
}

export default Activity;
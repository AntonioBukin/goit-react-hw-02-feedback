import styles from "../vote.module.scss";

const VoteActions = () => {
    return (
        <div className={styles.block}>
            <h4 className={styles.blockTitle}>Please leave feedback</h4>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
        </div>
    )
}

export default VoteActions;
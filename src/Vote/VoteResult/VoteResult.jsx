import styles from "../vote.module.scss";

const VoteResult = () => {
    return (
        <div className={styles.block}>
            <h4 className={styles.blockTitle}>Statistics</h4>
            <p>Good: 4</p>
            <p>Neutral: 5</p>
            <p>Bad: 1</p>
        </div>
    )

}

export default VoteResult;
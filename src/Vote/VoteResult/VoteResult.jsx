import styles from "../vote.module.scss";

const VoteResult = ({goodResult,total, good, neutral, bad}) => {
    return (
        <div className={styles.block}>
        <h4 className={styles.blockTitle}>Statistics</h4>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {goodResult} %</p>
        </div>
    )
}

export default VoteResult;

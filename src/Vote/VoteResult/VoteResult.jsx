import styles from "../vote.module.scss";

const VoteResult = ({total, goodResult, neutralResult, badResult}) => {
    return (
        <div className={styles.block}>
        <h4 className={styles.blockTitle}>Statistics</h4>
            <p>Good: {goodResult}</p>
            <p>Neutral: {neutralResult}</p>
            <p>Bad: {badResult}</p>
            <p>Total: {total}</p>
        </div>
    )
}

export default VoteResult;

import styles from "../vote.module.scss";

const VoteResult = ({total, goodPercent, neutralPercent, badPercent}) => {
    return (
        <div className={styles.block}>
            <h4 className={styles.blockTitle}>Statistics</h4>
            <p>Good: {goodPercent}</p>
            <p>Neutral: {neutralPercent}</p>
            <p>Bad: {badPercent}</p>
            <p>Total votes: {total}</p>
        </div>
    )

}

export default VoteResult;
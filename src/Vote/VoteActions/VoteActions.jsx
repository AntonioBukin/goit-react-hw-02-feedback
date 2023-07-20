import styles from "../vote.module.scss";

const VoteActions = ({leaveVote}) => {
    return (
        <div className={styles.block}>
            <h4 className={styles.blockTitle}>Please leave feedback</h4>
            <button onClick={() => leaveVote("good")} >Good</button>
            <button onClick={() => leaveVote("neutral")}>Neutral</button>
            <button onClick={() => leaveVote("bad")}>Bad</button>
        </div>
    )
}

export default VoteActions;

// const VoteActions = ({leaveVote}) => {
//     return (
//         // <div className={styles.block}>
//         //     <h4 className={styles.blockTitle}>Please leave feedback</h4>
//         //     <button onClick={()=> leaveVote("good")}>Good</button>
//         //     <button onClick={()=> leaveVote("neutral")}>Neutral</button>
//         //     <button onClick={()=> leaveVote("bad")}>Bad</button>
//         // </div>
//     )
// }

// export default VoteActions;
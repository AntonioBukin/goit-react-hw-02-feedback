//import styles from "../vote.module.scss";
import styles from "../VoteBlock/vote-block.module.scss"

const VoteActions = ({leaveVote}) => {
    return (
       <>
        <button className={styles.btn} onClick={() => leaveVote("good")} >Good</button>
        <button className={styles.btn} onClick={() => leaveVote("neutral")}>Neutral</button>
        <button className={styles.btn} onClick={() => leaveVote("bad")}>Bad</button>
       </>
            
        
    )
}

export default VoteActions;

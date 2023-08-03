import PropTypes from "prop-types";
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

VoteActions.propTypes = {
    leaveVote: PropTypes.func.isRequired,
}


export default VoteActions;

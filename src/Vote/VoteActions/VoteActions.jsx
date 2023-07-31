import styles from "../vote.module.scss";

const VoteActions = ({leaveVote}) => {
    return (
       <>
        <button onClick={() => leaveVote("good")} >Good</button>
        <button onClick={() => leaveVote("neutral")}>Neutral</button>
        <button onClick={() => leaveVote("bad")}>Bad</button>
       </>
            
        
    )
}

export default VoteActions;

import styles from "../vote.module.scss";

const VoteResult = ({goodResult,total, good, neutral, bad}) => {
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {goodResult} %</p>
        </>
            
        
    )
}

export default VoteResult;

import { Component } from "react";

import VoteActions from "./VoteActions/VoteActions";
import VoteResult from "./VoteResult/VoteResult";

import styles from "./vote.module.scss";

class Vote extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    calcTotal() {
       const {good, neutral, bad} = this.state;
       const total = good + neutral + bad;
       return total;
    }

    render() {
        const {good, neutral, bad} = this.state;
        const total = this.calcTotal();
        return (
            <div className={styles.wrapper}>
            <VoteActions/>
            <VoteResult/>
            </div>
        )
    }
}


export default Vote;
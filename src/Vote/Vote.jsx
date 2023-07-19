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

    calcPercent(propName) {
        const value = this.state[propName]; //this.state["good"]
        const total = this.calcTotal;
        if(!total) {
            return 0;
        }
        const result = Math.round((value / total) * 100);
        return result;
    }

    leaveVote = (propName) => {
        this.setState(prevState => {
            const value = prevState[propName];
                return {
                    [propName]: value + 1
                }
            })
    }

    render() {
        const total = this.calcTotal();

        const goodPercent = this.calcPercent("good");
        const neutralPercent = this.calcPercent("neutral");
        const badPercent = this.calcPercent("bad");

        return (
            <div className={styles.wrapper}>
            <VoteActions leaveVote={this.leaveVote}/>
            <VoteResult total={total} goodPercent ={goodPercent} neutralPercent ={neutralPercent} badPercent ={badPercent}/>
            </div>
        )
    }
}


export default Vote;
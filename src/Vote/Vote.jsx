import { Component } from "react";

import VoteActions from "./VoteActions/VoteActions";
import VoteResult from "./VoteResult/VoteResult";

import styles from "./vote.module.scss";

class Vote extends Component { //робимо компонент обгортку з state (щоб передавати дані з одного компоненту в інший)
    state = { //зберігаємо голоси в state
        good: 0,
        neutral: 0,
        bad: 0,
    }

    countTotalFeedback() { //метод який порахує нам загальну кількість
        const {good, neutral, bad} = this.state;
        const total = good + neutral + bad;
        return total;
    }

    countPositiveFeedbackPercentage(name) {
        const value = this.state[name];
        const total = this.countTotalFeedback();
        if(!total) { //якщо total 0, залишаємо нуль
            return 0;
        }
        const result = Math.round((value / total) * 100);
        return result;
    }

    //створюємо функцію обробник подій
    leaveVote = (name) => {
        this.setState(prevState => {
            return {[name]: prevState[name] + 1}
        })
    }

    render() {
        const total = this.countTotalFeedback();

        const goodResult = this.countPositiveFeedbackPercentage("good");
        const neutralResult = this.countPositiveFeedbackPercentage("neutral");
        const badResult = this.countPositiveFeedbackPercentage("bad");

        return (
            <div className={styles.wrapper}>
            <VoteActions leaveVote={this.leaveVote}/>
            <VoteResult total = {total} goodResult = {goodResult} neutralResult = {neutralResult} badPercent = {badResult} />
        </div>
            )
    }
}

export default Vote;


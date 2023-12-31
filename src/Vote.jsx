// import { Component } from "react";

// import VoteActions from "./VoteActions/VoteActions";
// import VoteResult from "./VoteResult/VoteResult";
// import VoteBlock from "./VoteBlock/VoteBlock";
// import Notification from "./VoteNotification/VoteNotification";


// import styles from "./vote.module.scss";

// class Vote extends Component { //робимо компонент обгортку з state (щоб передавати дані з одного компоненту в інший)
//     state = { //зберігаємо голоси в state
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     }

//     countTotalFeedback() { //метод який порахує нам загальну кількість
//         const {good, neutral, bad} = this.state;
//         const total = good + neutral + bad;
//         return total;
//     }

//     countPositiveFeedbackPercentage(name) {
//         const value = this.state[name];
//         const total = this.countTotalFeedback();
//         if(!total) { //якщо total 0, залишаємо нуль
//             return 0;
//         }
//         const result = Math.round((value / total) * 100);
//         return result;
//     }

//     //створюємо функцію обробник подій
//     leaveVote = (name) => {
//         this.setState(prevState => {
//             return {[name]: prevState[name] + 1}
//         })
//     }

//     render() {
//         const { good, neutral, bad } = this.state;

//         const total = this.countTotalFeedback();

//         const goodResult = this.countPositiveFeedbackPercentage("good");

//         return (
//             <div className={styles.wrapper}>
//                 <VoteBlock title="Please leave feedback:">
//                 <VoteActions leaveVote={this.leaveVote}/>
//                 </VoteBlock>
//                 <VoteBlock title="Results:">
//                     {this.countTotalFeedback() === 0 ? (
//                       <Notification message="There is no feedback"/> 
//                     ) : (
//                     <VoteResult goodResult={goodResult} total = {total} good = {good} neutral = {neutral} bad = {bad} 
//                     />
//                     )}               
//                 </VoteBlock>
//         </div>
//             )
//     }
// }

// export default Vote;


import { Component } from 'react';

import VoteActions from './components/VoteActions/VoteActions';
import VoteResult from './components/VoteResult/VoteResult';
import VoteBlock from './components/VoteBlock/VoteBlock';
import Notification from './components/VoteNotification/VoteNotification';

import styles from './index.module.scss';
import './styles/styles.scss';

class Vote extends Component {
  //робимо компонент обгортку з state (щоб передавати дані з одного компоненту в інший)
  state = {
    //зберігаємо голоси в state
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    //метод який порахує нам загальну кількість
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  // countPositiveFeedbackPercentage(name) {
  //   const value = this.state[name];
  //   const total = this.countTotalFeedback();
  //   if (!total) {
  //     //якщо total 0, залишаємо нуль
  //     return 0;
  //   }
  //   const result = Math.round((value / total) * 100);
  //   return result;
  // }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const value = this.countTotalFeedback();
    return good > 0 ? Math.round((good / value) * 100) : 0;
  };

  //створюємо функцію обробник подій
  // leaveVote = name => {
  //   this.setState(prevState => {
  //     return { [name]: prevState[name] + 1 };
  //   });
  // };

  leaveVote = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const stateName = Object.keys(this.state);

    const total = this.countTotalFeedback(this.state);

    const goodResult = this.countPositiveFeedbackPercentage('good');

    return (
      <div className="container">
        <div className={styles.wrapper}>
          <VoteBlock title="Please leave feedback:">
            <VoteActions options={stateName} leaveVote={this.leaveVote} />
          </VoteBlock>
          <VoteBlock title="Results:">
            {this.countTotalFeedback() === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <VoteResult
                goodResult={goodResult}
                total={total}
                good={good}
                neutral={neutral}
                bad={bad}
              />
            )}
          </VoteBlock>
        </div>
      </div>
    );
  }
}

export default Vote;

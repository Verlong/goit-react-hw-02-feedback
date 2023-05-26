// import PropTypes from 'prop-types';
import React from 'react';
import css from './feedback.module.css';
import FeedbackOptions from './feedback-options';
import Statistics from 'components/statistics/statistic';
import NoFeedbackMessage from 'components/message/no-feedback-message';

class FeedbackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
    // percent: 0,
  };

  goodFeedbackClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralFeedbackClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badFeedbackClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    const goodPercentage = this.countPositiveFeedbackPercentage();
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    return (
      <div className={css.feedbackContainer}>
        <h3 className={css.feedbackTitle}>Please leave feedback</h3>

        <FeedbackOptions
          onGood={this.goodFeedbackClick}
          onNeutral={this.neutralFeedbackClick}
          onBad={this.badFeedbackClick}
        />
        {totalFeedbacks !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={goodPercentage}
          />
        ) : (
          <NoFeedbackMessage message={'There is no feedback yet...'} />
        )}
      </div>
    );
  }
}

export default FeedbackCounter;

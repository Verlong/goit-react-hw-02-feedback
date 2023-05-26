// import PropTypes from 'prop-types';
import React from 'react';
import css from './feedback.module.css';
import FeedbackOptions from './feedback-options';
import Statistics from 'components/statistics/statistic';

class FeedbackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percent: 0,
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
    return (
      <div className={css.feedbackContainer}>
        <h3 className={css.feedbackTitle}>Please leave feedback</h3>

        <FeedbackOptions
          onGood={this.goodFeedbackClick}
          onNeurtal={this.neutralFeedbackClick}
          onBad={this.badFeedbackClick}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={totalFeedbacks}
          positivePercentage={goodPercentage}
        />
      </div>
    );
  }
}

export default FeedbackCounter;

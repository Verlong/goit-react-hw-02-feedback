// import PropTypes from 'prop-types';
import React from 'react';
import css from './feedback.module.css';
import FeedbackOptions from './feedback-options';
import Statistics from 'components/statistics/statistic';

class FeedbackCounter extends React.Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 3,
    total: 2,
    percent: 10,
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

  // countTotalFeedback();
  // countPositiveFeedbackPercentage();

  render() {
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
          total={this.state.total}
          positivePercentage={this.state.percent}
        />
      </div>
    );
  }
}

export default FeedbackCounter;

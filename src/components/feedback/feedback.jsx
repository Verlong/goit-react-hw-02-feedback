// import PropTypes from 'prop-types';
import React from 'react';
import css from './feedback.module.css';

class FeedbackCounter extends React.Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 3,
    total: 2,
    percent: 1,
  };

  // const totalFeedbacks = this.state.good + this.state.bad + this.state.neutral

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

  //     totalFidbacks = () => {
  //         this.setState(prevState => {
  //             return {
  //                 total: good + neutral + bad;
  //       }})
  //   };
  //   positiveFidbackPercent = () => {this.setState(prevState => {
  //             return {
  //                 percent: (good + neutral + bad)*100/good;
  //       }})};

  render() {
    return (
      <div className={css.feedbackContainer}>
        <h3 className={css.feedbackTitle}>Please leave feedback</h3>
        <div className={css.counterButtons}>
          <button
            className={css.goodButton}
            type="button"
            onClick={this.goodFeedbackClick}
          >
            Good
          </button>
          <button
            className={css.neutralButton}
            type="button"
            onClick={this.neutralFeedbackClick}
          >
            Neutral
          </button>
          <button
            className={css.badButton}
            type="button"
            onClick={this.badFeedbackClick}
          >
            Bad
          </button>
        </div>
        <h3 className={css.statTitle}>Statistic</h3>
        <div className={css.statResults}>
          <p className={css.statItem}>
            Good:<span className={css.statValue}>{this.state.good}</span>
          </p>
          <p className={css.statItem}>
            Neutral:<span className={css.statValue}>{this.state.neutral}</span>
          </p>
          <p className={css.statItem}>
            Bad:<span className={css.statValue}>{this.state.bad}</span>
          </p>
          <p className={css.statItem}>
            Total:
            <span className={css.statValue}>{this.state.total}</span>
          </p>
          <p className={css.statItem}>
            Positive feedback:
            <span className={css.statValue}>{this.state.percent}</span>%
          </p>
        </div>
      </div>
    );
  }
}

export default FeedbackCounter;

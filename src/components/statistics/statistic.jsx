import PropTypes from 'prop-types';
import React from 'react';
import css from './statistic.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statResults}>
    <h3 className={css.statTitle}>Statistic</h3>
    <p className={css.statItem}>
      Good:<span className={css.statValue}>{good}</span>
    </p>
    <p className={css.statItem}>
      Neutral:<span className={css.statValue}>{neutral}</span>
    </p>
    <p className={css.statItem}>
      Bad:<span className={css.statValue}>{bad}</span>
    </p>
    <p className={css.statItem}>
      Total:
      <span className={css.statValue}>{total}</span>
    </p>
    <p className={css.statItem}>
      Positive feedback:
      <span className={css.statValue}>{positivePercentage}</span>%
    </p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

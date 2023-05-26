import React from 'react';
import css from './feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <div className={css.counterButtons}>
    <button className={css.goodButton} type="button" onClick={onGood}>
      😍
    </button>
    <button className={css.neutralButton} type="button" onClick={onNeutral}>
      😐
    </button>
    <button className={css.badButton} type="button" onClick={onBad}>
      🤢
    </button>
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};

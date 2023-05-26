import React from 'react';
import css from './feedback.module.css';

const FeedbackOptions = ({ onGood, onNeurtal, onBad }) => (
  <div className={css.counterButtons}>
    <button className={css.goodButton} type="button" onClick={onGood}>
      Good
    </button>
    <button className={css.neutralButton} type="button" onClick={onNeurtal}>
      Neutral
    </button>
    <button className={css.badButton} type="button" onClick={onBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;

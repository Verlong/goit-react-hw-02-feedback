import React from 'react';
import css from '../statistics/statistic.module.css';
import PropTypes from 'prop-types';

const NoFeedbackMessage = ({ message }) => (
  <div>
    <h3 className={css.messageTitle}>{message}</h3>
  </div>
);

NoFeedbackMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoFeedbackMessage;

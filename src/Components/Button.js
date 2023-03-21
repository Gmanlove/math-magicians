import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, label }) => (
  <button className={className} type="button" onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;

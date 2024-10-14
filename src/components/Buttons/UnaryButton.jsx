import React from 'react';
import PropTypes from 'prop-types';

const UnaryButton = props => {
  return (
    <button>{props.sign}</button>
  )
}

UnaryButton.propTypes = {
  sign: PropTypes.string.isRequired
};

export default UnaryButton;
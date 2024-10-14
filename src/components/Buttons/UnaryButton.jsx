import React from 'react';
// import PropTypes from 'prop-types';
import styles from './UnaryButton.module.css';

const UnaryButton = props => {
  return (
    <button type='button' className={styles.button} onClick={props.clickHandler}>{props.sign}</button>
  )
}

// UnaryButton.propTypes = {
//   sign: PropTypes.string.isRequired
// };

export default UnaryButton;
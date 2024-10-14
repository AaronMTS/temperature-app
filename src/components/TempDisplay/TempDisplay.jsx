import React, { useState } from "react";
import styles from './TempDisplay.module.css';

const TempDisplay = props => {
  return (
    <div className={styles.display}>
        <h1 className={styles.currentTemp}>{props.temp}&deg;C</h1>
    </div>
    );
};

export default TempDisplay;

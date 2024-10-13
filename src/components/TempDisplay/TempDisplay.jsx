import React, { useState } from "react";
import styles from './TempDisplay.module.css';

const TempDisplay = props => {
  const [temp, setTemp] = useState(10);

  return (
    <div className={styles.display}>
        <h1 className={styles.currentTemp}>{temp}&deg;C</h1>
    </div>
    );
};

export default TempDisplay;

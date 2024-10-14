import React, { useState } from "react";
import styles from "./App.module.css";
import TempDisplay from "./components/TempDisplay/TempDisplay";
import ButtonList from "./components/ButtonList/ButtonList";

const App = () => {
  const [currentTemp, setTemp] = useState(10);

  const increaseTemp = () => {
    setTemp(currentTemp + 1);
  }

  const decreaseTemp = () => {
    setTemp(currentTemp - 1);
  }

  return (
    <main className={styles.container}>
      <TempDisplay temp={currentTemp}/>
      <ButtonList incHandler={increaseTemp} decHandler={decreaseTemp}/>
    </main>
  );
};

export default App;

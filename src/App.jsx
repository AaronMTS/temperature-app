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

  const decToHex = num => {
    let remainder;
    const hexObj = {
      10: "A",
      11: "B",
      12: "C",
      13: "D",
      14: "E",
      15: "F"
    }

    if (num > 255) {
      remainder = 255 % 16;
      num = 255;
    }
    else {
      remainder = num % 16;
    }
    
    if (Math.floor(num / 16) === 0) {
      return remainder > 9 ? hexObj[remainder] : remainder;
    }
    else {
      return `${decToHex(Math.floor(num / 16))}${remainder > 9 ? hexObj[remainder] : remainder}`;
    }
  };

  const calculateBgColor = (temp) => {
    let red;
    let green;
    let blue;

    temp = temp < 0 ? 0 : temp > 100 ? 100 : temp;

    red = decToHex(Math.round(255 * (temp/25)));

    if (temp <= 25) {
      green = decToHex(Math.round(215 * (temp/25)));
      blue = decToHex(Math.round(128 - (56 * (temp/25))));
    }
    else if (temp <= 50) {
      green = decToHex(Math.round(215 - (55 * ((temp - 25)/25))));
      blue = decToHex(Math.round(72 + (50 * ((temp - 25)/25))));
    }
    else if (temp <= 75) {
      green = decToHex(Math.round(160 + (5 * ((temp - 50)/25))));
      blue = decToHex(Math.round(122 - (122 * ((temp - 50)/25))));
    }
    else {
      green = decToHex(Math.round(165 - (66 * ((temp - 75)/25))));
      blue = decToHex(Math.round(0 + (71 * ((temp - 75)/25))));
    }

    return `#${red.toString().length < 2 ? `0${red}` : red}${green.toString().length < 2 ? `0${green}` : green}${blue.toString().length < 2 ? `0${blue}` : blue}`;
  }

  return (
    <main className={styles.container} style={{backgroundColor: calculateBgColor(currentTemp)}}>
      <TempDisplay temp={currentTemp}/>
      <ButtonList incHandler={increaseTemp} decHandler={decreaseTemp}/>
    </main>
  );
};

export default App;

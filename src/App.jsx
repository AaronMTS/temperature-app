import React, { useState } from "react";
import { css } from 'glamor';
import styles from "./App.module.css";
import TempDisplay from "./components/TempDisplay/TempDisplay";
import ButtonList from "./components/ButtonList/ButtonList";
import ResetButton from "./components/Buttons/ResetButton";

const App = () => {
  const topOffset = "40px";
  const rightOffset = "30px";
  const rButtonSize = "40px";
  const [currentTemp, setTemp] = useState(10);

  const increaseTemp = () => {
    setTemp(currentTemp + 1);
  }

  const decreaseTemp = () => {
    setTemp(currentTemp - 1);
  }

  const resetTemp = () => {
    let startTemp = currentTemp;
    let id = setInterval(frame, Math.round(10/(Math.abs(startTemp) + 10) * 75));
    function frame() {
      if (startTemp === 10) {
        clearInterval(id);
      }
      else if (startTemp > 10) {
        setTemp(startTemp - 1);
        startTemp--;
      }
      else {
        setTemp(startTemp + 1);
        startTemp++;
      }
    }
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

  let beforeRule = css({
    '::before': {
      content: '""',
      position: 'absolute',
      zIndex: '-1',
      top: topOffset,
      right: rightOffset,
      width: rButtonSize,
      height: rButtonSize,
      borderRadius: '100%',
      boxShadow: `0 0 0 440px ${calculateBgColor(currentTemp)}`,
      transition: 'box-shadow 0.4s',
      boxShadow: `0 0 0 440px ${calculateBgColor(currentTemp)}`,
      transition: 'box-shadow 0.4s',
    }
  });

  return (
    <main className={`${styles.container} ${beforeRule}`}>
      <ResetButton top={topOffset} right={rightOffset} size={rButtonSize} clickHandler={resetTemp}/>
      <TempDisplay temp={currentTemp}/>
      <ButtonList incHandler={increaseTemp} decHandler={decreaseTemp}/>
    </main>
  );
};

export default App;

import React from "react";
import UnaryButton from "../Buttons/UnaryButton";
import styles from "./ButtonList.module.css";

const ButtonList = (props) => {
  return (
    <div className={styles.div}>
      <UnaryButton sign="+" clickHandler={props.incHandler} />
      <UnaryButton sign="-" clickHandler={props.decHandler} />
    </div>
  );
};

export default ButtonList;

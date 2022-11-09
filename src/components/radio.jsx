import React from "react";
import styles from "../styles/radio.module.css";

const Radio = ({ name, value, label, displayPage, handleInputChecked }) => {
  const onChecked = (event) => {
    handleInputChecked(event);
  };

  return (
    <label
      htmlFor={value}
      className={`${styles.label} ${getLabelStyle(displayPage)}`}
    >
      <input
        type="radio"
        name={name}
        id={value}
        className={`${styles.radio} ${getRadioStyle(displayPage)}`}
        value={value}
        onChange={onChecked}
      />
      <span
        className={`${styles.customRadio} ${getCustomRadioStyle(displayPage)}`}
      ></span>
      {label}
    </label>
  );
};

function getLabelStyle(page) {
  switch (page) {
    case "home":
      return styles.homeLabel;
    default:
      console.log(`unknown button style ${page}page`);
      return styles.homeLabel;
  }
}

function getRadioStyle(page) {
  switch (page) {
    case "home":
      return styles.homeRadio;
    default:
      console.log(`unknown Radio style ${page}page`);
      return styles.homeRadio;
  }
}

function getCustomRadioStyle(page) {
  switch (page) {
    case "home":
      return styles.homeCustomRadio;
    default:
      console.log(`unknown customRadio style ${page}page`);
      return styles.homeCustomRadio;
  }
}
export default Radio;

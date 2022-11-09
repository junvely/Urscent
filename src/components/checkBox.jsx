import React from "react";
import styles from "../styles/checkBox.module.css";

const CheckBox = ({ name, value, label, displayPage, handleInputChecked }) => {
  const onChecked = (event) => {
    handleInputChecked(event);
  };

  return (
    <label
      htmlFor={value}
      className={`${styles.label} ${getLabelStyle(displayPage)}`}
    >
      <input
        type="checkbox"
        name={name}
        id={value}
        className={`${styles.checkBox} ${getCheckBoxStyle(displayPage)}`}
        value={value}
        onChange={onChecked}
      />
      <span
        className={`${styles.customCheckBox} ${getCustomCheckBoxStyle(
          displayPage
        )}`}
      ></span>
      {label}
    </label>
  );
};

function getLabelStyle(page) {
  switch (page) {
    case "login":
      return styles.loginLabel;
    case "home":
      return styles.homeLabel;
    default:
      console.log(`unknown button style ${page}page`);
      return styles.loginLabel;
  }
}

function getCheckBoxStyle(page) {
  switch (page) {
    case "login":
    case "home":
      return styles.loginCheckBox;
    default:
      console.log(`unknown checkBox style ${page}page`);
      return styles.loginCheckBox;
  }
}

function getCustomCheckBoxStyle(page) {
  switch (page) {
    case "login":
      return styles.loginCustomCheckBox;
    case "home":
      return styles.homeCustomCheckBox;
    default:
      console.log(`unknown customCheckBox style ${page}page`);
      return styles.loginCustomCheckBox;
  }
}
export default CheckBox;

import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

const BeforeLoginMenu = (props) => {
  return (
    <ul className={styles.loginMenu}>
      <li>
        <Link to="/login">LOGIN</Link>
      </li>
      <li className={styles.signUp}>
        <Link to="/sign-up">회원가입</Link>
      </li>
    </ul>
  );
};

export default BeforeLoginMenu;

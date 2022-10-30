import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import { ReactComponent as MyLikeList } from "../assets/my-like-list.svg";
import { ReactComponent as MyPage } from "../assets/my-page.svg";

const AfterLoginMenu = (props) => {
  const logOut = () => {
    console.log("Logout");
  };

  return (
    <ul className={styles.loginMenu}>
      <li className={styles.logOut} onClick={() => logOut()}>
        로그아웃
      </li>
      <li className={styles.myLikeList}>
        <Link to="/my-like-list">
          <MyLikeList className={styles.myLikeListIcon}></MyLikeList>
        </Link>
      </li>
      <li className={styles.myPage}>
        <Link to="/my-page">
          <MyPage className={styles.myPageIcon}></MyPage>
        </Link>
      </li>
    </ul>
  );
};

export default AfterLoginMenu;

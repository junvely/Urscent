import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search-bar";
import styles from "../styles/header.module.css";

const Header = (props) => {
  const userLogin = false;

  const logOut = () => {
    console.log("Logout");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.leftMenu}>
          <Link to="/">
            <img src="img/logo.png" alt="logo-image" className={styles.logo} />
          </Link>
          <ul className={styles.gnb}>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/perfume-brand">Perfume Brand</Link>
            </li>
            <li>
              <Link to="/perfumer">Perfumer</Link>
            </li>
          </ul>
        </div>
        <div className={styles.rightMenu}>
          <ul className={styles.loginMenu}>
            {userLogin ? (
              <li onClick={logOut}>로그아웃</li>
            ) : (
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
            )}
            <li>
              {userLogin ? (
                <Link to="/my-page">My page</Link>
              ) : (
                <Link to="/sign-up">회원가입</Link>
              )}
            </li>
          </ul>
          <SearchBar></SearchBar>
        </div>
      </nav>
    </header>
  );
};

export default Header;

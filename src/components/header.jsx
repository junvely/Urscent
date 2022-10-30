import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search-bar";
import styles from "../styles/header.module.css";
import AfterLoginMenu from "./after-login-menu";
import BeforeLoginMenu from "./before-login-menu";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = (props) => {
  const userLogin = true;
  // const userLogin = false;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.leftMenu}>
          <Link to="/">
            <Logo className={styles.logo}></Logo>
          </Link>
          <ul className={styles.gnb}>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/perfume-brand">Perfume Brand</Link>
            </li>
          </ul>
        </div>
        <div className={styles.rightMenu}>
          {userLogin ? (
            <AfterLoginMenu></AfterLoginMenu>
          ) : (
            <BeforeLoginMenu></BeforeLoginMenu>
          )}
          <SearchBar></SearchBar>
        </div>
      </nav>
    </header>
  );
};

export default Header;

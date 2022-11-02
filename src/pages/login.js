import React, { useState } from "react";
import styles from "../styles/login.module.css";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import Button from "../components/button";

const Login = (props) => {
  // const loginFail = true;
  const loginFail = false;

  return (
    <div className={styles.loginCon}>
      {/* login form */}
      <form
        // method="post"
        action=""
        name="loginForm"
        id={styles.loginForm}
      >
        <Link to="/">
          <Logo className={styles.logo}> </Logo>
        </Link>

        <label htmlFor="userId" className={styles.label}>
          아이디
        </label>
        <input
          type="text"
          name="userId"
          className={`${styles.input} ${styles.userId}`}
          placeholder="영문소문자, 숫자 6-12자 이내"
          autoComplete="username"
          required
          pattern="^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,12}$"
          title="영문소문자, 숫자 6-12 이내"
        ></input>
        <label htmlFor="userPw" className={styles.label}>
          비밀번호
        </label>
        <input
          type="password"
          name="userPw"
          className={`${styles.input} ${styles.userPw}`}
          placeholder="영문소문자, 숫자, 특수문자 10-20자 이내"
          autoComplete="current-password"
          required
          pattern="^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{10,20}$"
          title="영문소문자, 숫자, 특수문자 10-20자 이내"
        ></input>
        {loginFail && (
          <span className={styles.pwFail}>
            입력하신 아이디와 비밀번호가 일치하지 않습니다.
          </span>
        )}
        <ul className={styles.checkList}>
          <li>
            <label htmlFor="saveId" className={styles.checkLabel}>
              <input
                type="checkbox"
                name="saveId"
                id="saveId"
                className={`${styles.checkBox} ${styles.saveId}`}
                value="saveId"
              />
              <span className={styles.customCheckBox}></span>
              아이디저장
            </label>
          </li>
          <li>
            <label htmlFor="autoLogin" className={styles.checkLabel}>
              <input
                type="checkbox"
                name="autoLogin"
                id="autoLogin"
                className={`${styles.checkBox} ${styles.autoLogin}`}
                value="autoLogin"
              />
              <span className={styles.customCheckBox}></span>
              자동로그인
            </label>
          </li>
        </ul>
        <Button
          type="submit"
          id="loginBtn"
          className="button"
          label="로그인"
        ></Button>
        <span className={styles.or}>또는</span>
        <Button
          type="button"
          id="kakaoLogin"
          className="button"
          label="카카오 로그인"
        ></Button>
        <ul className={styles.findUser}>
          <li className={styles.findId}>
            <Link to="/">아이디 찾기</Link>
          </li>
          <li className={styles.findPw}>
            <Link to="/">비밀번호 찾기</Link>
          </li>
        </ul>
        <div className={styles.signUp}>
          <p>아직 회원이 아니신가요?</p>
          <Link to="/sign-up" className={styles.bold}>
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

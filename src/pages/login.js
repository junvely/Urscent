import React, { useRef, useState } from "react";
import styles from "../styles/login.module.css";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import Button from "../components/button";

const Login = (props) => {
  // const loginFail = true;
  const loginFail = false;

  const [inputValue, setInputValue] = useState({
    userId: "",
    userPw: "",
  });

  const idRef = useRef();
  const pwRef = useRef();

  const { userId, userPw } = inputValue;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
  };

  const validate = () => {
    const regexId = /^(?=.*?[a-z])(?=.*?[0-9]).{6,12}$/;
    const regexPw = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{10,20}$/;
    const idCheck = regexId.test(userId);
    const pwCheck = regexPw.test(userPw);

    if (!idCheck) {
      alert("아이디는 영문소문자, 숫자 6-12자 이내 입니다.");
      idRef.current.value = "";
      idRef.current.focus();
      return false;
    }
    if (!pwCheck) {
      alert("비밀번호는 영문소문자, 숫자, 특수문자 10-20자 이내입니다.");
      pwRef.current.value = "";
      pwRef.current.focus();
      return false;
    }
    onSubmit(idCheck, pwCheck);
  };

  const onSubmit = (idCheck, pwCheck) => {
    if (idCheck && pwCheck) {
      console.log("form submit");
    }
  };

  return (
    <div className={styles.loginCon}>
      {/* login form */}
      <form
        // method="post"
        action=""
        name="loginForm"
        id={styles.loginForm}
        onSubmit={handleSubmit}
      >
        <Link to="/">
          <Logo className={styles.logo}> </Logo>
        </Link>

        <label htmlFor="userId" className={styles.label}>
          아이디
        </label>
        <input
          ref={idRef}
          type="text"
          name="userId"
          className={`${styles.input} ${styles.userId}`}
          placeholder="영문소문자, 숫자 6-12자 이내"
          autoComplete="username"
          onChange={handleChange}
        ></input>
        <label htmlFor="userPw" className={styles.label}>
          비밀번호
        </label>
        <input
          ref={pwRef}
          type="password"
          name="userPw"
          className={`${styles.input} ${styles.userPw}`}
          placeholder="영문소문자, 숫자, 특수문자 10-20자 이내"
          autoComplete="current-password"
          onChange={handleChange}
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

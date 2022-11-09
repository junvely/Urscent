import React, { useRef, useState } from "react";
import styles from "../styles/login.module.css";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import Button from "../components/button";
import CheckBox from "../components/checkBox";

const Login = (props) => {
  // 추가할 기능 : 폼 서버에 전송 onSubmit 시
  // App에서 사용자정보 state 업데이트 함수 props으로 전달받아 실행
  // App에서 로그인 성공시 state에 저장, 실패시 login에 props전달
  // 로그인 정보 없을 시 에러문구 띄우기 > span에 value="입력하신 아이디와 비밀번호가 일치하지 않습니다." 방식이 좋을 듯

  const loginFail = true;
  // const loginFail = false;

  const [loginFormValue, setLoginFormValue] = useState({
    userId: "",
    userPw: "",
    saveId: false,
    autoLogin: false,
  });

  const { userId, userPw } = loginFormValue;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormValue({
      ...loginFormValue,
      [name]: value,
    });
  };

  const handleInputChecked = (event) => {
    const { name, checked } = event.target;
    setLoginFormValue({
      ...loginFormValue,
      [name]: checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
  };

  const idRef = useRef();
  const pwRef = useRef();

  const validate = () => {
    const regexId = /^(?=.*?[a-z])(?=.*?[0-9]).{6,12}$/;
    const regexPw = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{10,20}$/;
    const idCheck = regexId.test(userId);
    const pwCheck = regexPw.test(userPw);

    if (!idCheck) {
      idRef.current.value = "";
      idRef.current.focus();
      return false;
    }
    if (!pwCheck) {
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        ></input>
        {/* 로그인 실패 시 */}
        {loginFail && (
          <span className={styles.loginFail}>
            {/* 입력하신 아이디와 비밀번호가 일치하지 않습니다. */}
          </span>
        )}
        <ul className={styles.checkList}>
          <li>
            <CheckBox
              name="saveId"
              value="saveId"
              label="아이디저장"
              displayPage="login"
              handleInputChecked={handleInputChecked}
            />
          </li>
          <li>
            <CheckBox
              name="autoLogin"
              value="autoLogin"
              label="자동로그인"
              displayPage="login"
              handleInputChecked={handleInputChecked}
            />
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

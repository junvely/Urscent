import React, { useRef, useState } from "react";
import styles from "../styles/sign-up.module.css";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import Button from "../components/button";
import CheckBox from "../components/checkBox";

const SignUp = (props) => {
  // 개인정보 수집 동의 모달창
  // API 연동

  const [signUpFormValue, setSignUpFormValue] = useState({
    userId: "",
    userPw: "",
    pwOk: "",
    pwFail: "",
    yearOfBirth: "",
    gender: "",
    email: "",
    privacyInfoAgree: "",
  });

  const [btnActivate, setBtnActivate] = useState("");

  const idRef = useRef();
  const pwRef = useRef();
  const pwOkRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef([]);

  const { userId, userPw, pwOk, pwFail, email, privacyInfoAgree } =
    signUpFormValue;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormValue({
      ...signUpFormValue,
      [name]: value,
    });
  };

  const handleInputChecked = (event) => {
    const { name, checked } = event.target;
    setSignUpFormValue({
      ...signUpFormValue,
      [name]: checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitValidate();
  };

  // 성별 체크 중복 방지
  const checkOnlyOne = (target) => {
    for (let i = 0; i < genderRef.current.length; i++) {
      if (genderRef.current[i] !== target) {
        genderRef.current[i].checked = false;
      }
    }
  };

  // 유효성 검사
  const regexId = /^(?=.*?[a-z])(?=.*?[0-9]).{6,12}$/;
  const regexPw = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{10,20}$/;
  const idCheck = regexId.test(userId);
  const pwCheck = regexPw.test(userPw);
  const pwOkCheck = userPw === pwOk;
  const emailCheck = email !== null && email !== "" && email !== undefined;

  // onSubmit시
  const onSubmitValidate = () => {
    // 아이디
    if (!idCheck) {
      idRef.current.value = "";
      idRef.current.focus();
      return false;
    }
    // 비밀번호
    if (!pwCheck) {
      pwRef.current.value = "";
      pwRef.current.focus();
      return false;
    }
    // 비밀번호 확인
    if (pwOkCheck) {
      setSignUpFormValue({ ...signUpFormValue, pwFail: "" });
    } else {
      setSignUpFormValue({
        ...signUpFormValue,
        pwFail: "비밀번호가 일치하지 않습니다.",
      });
      pwOkRef.current.value = null;
      pwOkRef.current.focus();
      return false;
    }
    // 이메일
    if (emailCheck) {
      setBtnActivate(true);
    } else {
      setBtnActivate(false);
      emailRef.current.focus();
      return false;
    }
    if (privacyInfoAgree === false) {
      alert("개인정보 수집 및 이용 동의는 필수입니다.");
      return false;
    }
    onSubmit(true);
  };

  // onChange시
  const onChangeValidate = () => {
    if (idCheck && pwCheck && pwOkCheck && emailCheck && email.length > 1) {
      setBtnActivate(true);
    } else {
      setBtnActivate(false);
    }
  };

  const onSubmit = (submit) => {
    if (submit) {
      console.log("sign up");
    }
  };

  return (
    <div className={styles.signUpCon}>
      <form
        // method="post"
        action=""
        name="signUpForm"
        id={styles.signUpForm}
        onSubmit={handleSubmit}
      >
        <Link to="/">
          <Logo className={styles.logo}> </Logo>
        </Link>
        {/* 아이디 */}
        <label
          htmlFor="userId"
          className={`${styles.label}  ${styles.required}`}
        >
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
        {/* 비밀번호 */}
        <label
          htmlFor="userPw"
          className={`${styles.label} ${styles.required}`}
        >
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
        {/* 비밀번호 확인 */}
        <input
          ref={pwOkRef}
          type="password"
          name="pwOk"
          className={`${styles.input} ${styles.userPwOk}`}
          placeholder="비밀번호 재입력"
          autoComplete="current-password"
          onChange={handleInputChange}
        ></input>
        {/* 회원가입 실패 시 */}
        <span className={styles.signUpFail}>{pwFail}</span>
        {/* 출생 연도 */}
        <label
          htmlFor="yearOfBirth"
          className={`${styles.label} ${styles.yearOfBirth}`}
        >
          출생 연도
        </label>
        <input
          type="text"
          name="yearOfBirth"
          className={`${styles.input} ${styles.userPw}`}
          placeholder="YYYY"
          maxLength={4}
          onChange={handleInputChange}
        ></input>
        {/* 성별 */}
        <h2 className={`${styles.label} ${styles.gender}`}>성별</h2>
        <div className={styles.genderList}>
          <input
            type="checkbox"
            ref={(el) => (genderRef.current[0] = el)}
            name="gender"
            id="male"
            className={`${styles.genderBtn} ${styles.maleBtn}`}
            value="male"
            onChange={(e) => {
              handleInputChange(e);
              checkOnlyOne(e.target);
            }}
          />
          <label
            htmlFor="male"
            className={`${styles.customGenderBtn} ${styles.male}`}
          >
            남성
          </label>
          <input
            type="checkbox"
            ref={(el) => (genderRef.current[1] = el)}
            name="gender"
            id="female"
            className={`${styles.genderBtn}`}
            value="female"
            onChange={(e) => {
              handleInputChange(e);
              checkOnlyOne(e.target);
            }}
          />
          <label htmlFor="female" className={`${styles.customGenderBtn}`}>
            여성
          </label>
        </div>
        {/* 이메일 */}
        <label
          htmlFor="email"
          className={`${styles.label} ${styles.email} ${styles.required}`}
        >
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          className={`${styles.input} ${styles.userPw}`}
          placeholder="이메일 주소를 입력하세요."
          onChange={(e) => {
            handleInputChange(e);
            onChangeValidate();
          }}
        ></input>
        <span className={styles.signUpFail}>
          계정 분실 시 본인인증 정보로 활용됩니다.
        </span>
        {/* 개인정보 수집 동의 */}
        <div className={styles.privacyPolicy}>
          <CheckBox
            name="privacyInfoAgree"
            value="privacyInfoAgree"
            label="개인정보 수집 및 이용 동의 (필수)"
            displayPage="home"
            handleInputChecked={handleInputChecked}
          ></CheckBox>
          <Link to="/privacy-policy" className={styles.privacyPolicyDetail}>
            자세히
          </Link>
        </div>
        <Button
          type="submit"
          id={btnActivate ? "signUpActive" : "signUpDeActive"}
          className="button"
          label="회원가입"
        ></Button>
      </form>
    </div>
  );
};

export default SignUp;

import React from "react";
import styles from "../styles/footer.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Email } from "../assets/e-mail.svg";

const instagramUrl = "https://www.instagram.com/magazine_speakeasy/";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <nav className={styles.nav}>
        <div className={styles.fnb}>
          <Logo className={styles.logo}></Logo>
          <div className={styles.siteMap}>
            <ul>
              <li>
                <Link to="/notes">Notes</Link>
              </li>
              <li>
                <Link to="/perfume-brand">Perfume Brand</Link>
              </li>
              <li>
                <Link to="/perfumer">Perfumer</Link>
              </li>
              <li className={styles.privacy}>
                <Link to="/privacy-policy">개인정보처리방침</Link>
              </li>
            </ul>
            <p className={styles.content}>
              나만의 향수를 찾고 싶다면, 향수를 사랑한다면, urscent는 그런
              사람들은 위한 공간입니다.<br></br>
              urscent에서 개인화된 추천 알고리즘과 상세한 검색 서비스, 유저들의
              리뷰를 통해 나만의 향수를 찾아보세요.
            </p>
          </div>
        </div>
        <ul className={styles.contact}>
          <li
            onClick={() => {
              window.open(instagramUrl);
            }}
          >
            <Instagram className={styles.instagram}></Instagram>
          </li>
          <li>
            <Link to="">
              {/* 메일 연동 > dhkim77000@gmail.com */}
              <Email className={styles.email}></Email>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;

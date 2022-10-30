# 🧴Urscent

#### 🧴Urscent : 향수 프로젝트

- 머신러닝 알고리즘을 활용해 개인화된 향수 추천을 제공하는 웹 개발 프로젝트 : 프론트엔드 담당

- Notion :

<!-- <img src ="" alt=""> -->

## 🕹️ Stack 사용스택(프론트엔드)

<div style="display:flex">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/PostCSS-%dc3a09.svg?style=for-the-badge&logo=PostCSS&logoColor=white">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">
</div>

<br>

#### 💻Desktop page

#### 🔐login page

<br>

## ✨ Business Card Maker기능

#### 프로젝트 기능 사항

- 검색 기능 : 향수명 또는 향수 정보를 통해 원하는 향수 검색 기능
- 추천 기능 : 성별, 좋아요, 취향을 분석하여 추천을 제공하는 기능
- 향수 상세 페이지 & 커뮤니티 기능 : 간단한 댓글 등

#### FE 기능

<br>

## ❇️ 날짜별 기능 구현 기록

> #### 10/12 : 🎉 : Urscent 프로젝트 생성

> #### 10/15 : 💄 : Header 컴포넌트 생성 및 스타일 적용

- 프로젝트 폴더 구조 설계, 페이지 및 컴포넌트 구성
- Router 페이지간 이동 기능 구현
- Header(before Login), searchBar 컴포넌트 생성 및 스타일 적용
- SearchBar 유효성 검사 : form > submit 시 미입력 방지(required), 30자 이상(임의)
- SearchBar 검색 후 ref를 사용하여 입력폼 초기화 : inputRef.current.reset() x 폼에서만 가능 formRef.current.reset()
- 로그인 정보가 있을 시 로그인, 회원가입 > 로그아웃, My page으로 변경

```javascript
    inputRef.current.value(); > inputRef의 현재 값 가져오기
    formRef.current.reset(); > formRef에서 폼 초기화
```

- 구현 사항 확인을 위해 Netlify 배포하여 확인

<img src="/public/img/header.jpg" alt="header">

##### ✖️ 더 알아보기 : 폼 초기화 시 ref와 event.target 사용의 차이점

##### ✖️ 더 추가할 기능 : 로그인 정보 받아오기

<br>

> #### 10/19 : 💄 : 추후 확장성을 고려하여 반응형 단위로 변경(%, rem 등)

- 본 프로젝트는 반응형이 아닌 데스크탑 사이즈로만 계획되었으나, 추후 확장성을 고려하여 반응형 단위로 변경 및 태블릿모드 반응형까지 진행(임의)
- html의 font-size : 62.5%로 변경 : 기존 16px(100%)에서 > 10px(62.5%)로 변경 : rem단위를 10px 단위로 계산을 용이하게 하기 위함(ex. 16px > 1.6rem)

```css
html {
  font-size: 62.5%;
  /* 10px */
}
```

- rem, em 단위 > rem 단위로 통일
- 반응형 태블릿(768px)모드 : html font-size : 50%(8px)로 변경(임의)
- react-responsive, useMediaQuery : react-responsive는 리액트에서 반응형 모듈을 사용하기 위한 라이브러리다. 보통 CSS media-query를 사용해도 충분하지만, react-responsive에서 제공하는 useMediaQuery 훅을 사용하면 아예 다른 컴포넌트(모듈)를 보여줘야 할 경우 유용하게 사용할 수 있다.

```
  npm i react-responsive
```

<br>

> #### 10/30 : 🎨 : Header login-menu(before, after) 컴포넌트 분리

- Logo 이미지 변경
- 로그인 전 후 디자인 차이로 인한 before-login-menu, after-login-menu 각각 컴포넌트 분리
- my-like-list, my-page 벡터 이미지 추가 : 따로 이미지 조작 없이 사용할 경우 <img>또는 background로 사용하고, CSS 등 변경이 필요할 경우는 inline으로 직접 추가하고 CSS에서 조절 가능하다.

```jsx
<svg
  width="24"
  height="22"
  viewBox="0 0 24 22"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M19.0554 2.41708C19.7228 2.69364 20.3292 3.099 20.84 3.60999C21.351 4.12075 21.7563 4.72718 22.0329 5.39464C22.3095 6.0621 22.4518 6.77751 22.4518 7.49999C22.4518 8.22248 22.3095 8.93789 22.0329 9.60535C21.7563 10.2728 21.351 10.8792 20.84 11.39L19.78 12.45L12 20.23L4.22 12.45L3.16 11.39C2.1283 10.3583 1.54871 8.95903 1.54871 7.49999C1.54871 6.04096 2.1283 4.64169 3.16 3.60999C4.19169 2.5783 5.59096 1.9987 7.05 1.9987C8.50903 1.9987 9.9083 2.5783 10.94 3.60999L12 4.66999L13.06 3.60999C13.5708 3.099 14.1772 2.69364 14.8446 2.41708C15.5121 2.14052 16.2275 1.99817 16.95 1.99817C17.6725 1.99817 18.3879 2.14052 19.0554 2.41708Z"
    stroke="black"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
```

<br>

> #### 10/31 : 1. 🎨 : 벡터이미지 사용 방법 개선(컴포넌트화)

- svg를 inline방식으로 html에 직접 삽입할 경우 코드를 관리하기 어려워짐으로 컴포넌트화하여 사용하기로 변경
- logo, search, my-page, my-like-list 등 SVG 아이콘 src>assets 파일로 이동
- ReactComponent as ~ 로 컴포넌트로 import
- svg파일 내부에서 width, height = "current"로 props으로 값을 주거나, CSS에서 자유롭게 변경가능 하도록 설정 > error발생하여 그냥 기본값으로 설정
- 반응형 고려 시에는 CSS에서 rem,em단위로 설정하여 변경되도록 하였다.

```javascript
import { ReactComponent as MyLikeList } from "../assets/my-like-list.svg";
import { ReactComponent as MyPage } from "../assets/my-page.svg";

<MyPage className={styles.myPage}></MyPage>;
```

<br>

> #### 2. ✨ : footer 컴포넌트 생성

- footer 컴포넌트 생성 및 스타일링
- 리액트에서 외부 링크로 이동하는 방법 : onclick = () => window.open(url)

```javascript
const instagramUrl = "https://www.instagram.com/magazine_speakeasy/";

<li
  onClick={() => {
    window.open(instagramUrl);
  }}
></li>;
```

<br>

##### ✖️ 더 추가할 기능 : 이메일 연동, 디자인 확정 시 logo 크기 및 여백 수정

## ✅ Takeaway 리팩토링 외 느낀점/개선할점

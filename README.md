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

> #### 10/14 : 💄 : Header 컴포넌트 생성 및 스타일 적용

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

> #### 10/19 : 💄 : HTML,CSS 반응형 단위 수정

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

##### ✖️ 더 알아보기 : react-responsive, useMediaQuery 사용 방법

##### ✖️ 더 추가할 기능 : 모바일 반응형 사이즈 고려(임의)

<br>

## ✅ Takeaway 리팩토링 외 느낀점/개선할점

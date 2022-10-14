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

#### 10/12 : 🎉 : Urscent 프로젝트 생성

#### 10/14 : 💄 : Header 컴포넌트 생성 및 스타일 적용

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

<img src="/public/img/header.jpg" alt="header image">

##### ✖️ 더 알아보기 : 폼 초기화 시 ref와 event.target 사용의 차이점

##### ✖️ 더 추가할 기능 : 로그인 정보 받아오기

## ✅ Takeaway 리팩토링 외 느낀점/개선할점

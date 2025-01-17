# 🔥Urscent

#### 🔥Urscent : 향수 프로젝트

- 머신러닝 알고리즘을 활용해 개인화된 향수 추천을 제공하는 웹 개발 프로젝트 : 프론트엔드(FE) 담당

- 배포 : https://urscent.netlify.app/

- Notion : https://glow-chicory-fd6.notion.site/Roadmap-4428aacc2c884dc2b7716c9cc33251d7

#### 💻Desktop page

#### 🔐login page

<div style="display:flex">
  <img src ="/public/img/login.jpg" alt="login-page" style="width:400px">
  <img src ="/public/img/sign-up.jpg" alt="login-page" style="width:400px">
</div>

<br>

## 🕹️ Stack 사용스택(FE)

<div style="display:flex">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/PostCSS-%dc3a09.svg?style=for-the-badge&logo=PostCSS&logoColor=white">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">
</div>

<br>

## ✨ Urscent 기능(FE)

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

- 본 프로젝트는 반응형이 아닌 데스크탑 사이즈로만 계획되었으나, 유지보수 및 추후 확장성을 고려하여 반응형 단위로 변경 및 태블릿모드 반응형까지 고려
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
- \*주의) Svg는 inline이기 때문에 여백이 생긴다. > block으로 변경

```javascript
import { ReactComponent as MyLikeList } from "../assets/my-like-list.svg";
import { ReactComponent as MyPage } from "../assets/my-page.svg";

<MyPage className={styles.myPage}></MyPage>;
```

<br>

> #### 2. ✨ : footer 컴포넌트 생성

- footer 컴포넌트 생성 및 스타일링
- 리액트에서 외부 링크(instagram)로 이동 : onclick = () => window.open(url)

```javascript
const instagramUrl = "https://www.instagram.com/magazine_speakeasy/";

<li
  onClick={() => {
    window.open(instagramUrl);
  }}
></li>;
```

##### ✖️ 더 추가할 기능 :

- 이메일 연동
- ~~디자인 확정 시 logo 크기 및 여백 수정~~

<br>

> #### 11/1 : ✨ : login page 생성 및 스타일 적용

- login page 생성 및 스타일 적용
- button 컴포넌트 생성
- custom checkbox
- 리액트에서 label for=""=> label htmlFor="" : 리액트에서는 input의 id와 연동 가능(name만 입력시x)
- \*참고) 크롬에서 브라우저 확장 프로그램인 자동 완성 기능을 사용하고 싶을 경우, input에서 autocomplete="on/off" 권한을 지정해 활성화/비활성화 해주어야 한다.
- 유효성 검사 : 아이디 비밀번호 오류 시 따로 경고창 없이 input값을 비우고 input focus시 placeholder값 안보이게 하여 focus되도록 변경

```javascript
[DOM] Input elements should have autocomplete attributes (suggested: "current-password"):

```

```html
<input type="password" name="password" autocomplete="off" />
<!-- 비활성화 -->
<input type="text" name="userId" autocomplete="username" />
<!-- 아이디 -->
<input type="password" name="password" autocomplete="current-password" />
<!-- 현재 비밀번호 시 For Chrome-->
<input type="password" name="password" autocomplete="new-password" />
<!-- 새 비밀번호 시 For Mozilla-->
```

##### ✖️ 더 알아보기 : input submit과 button submit 차이

##### ✖️ 더 추가할 기능 :

- 아이디찾기, 비밀번호 찾기 기능
- ~~유효성검사~~
- login fail 기능
- 카카오 로그인 연동

<br>

> #### 11/2 : ✨ : HTML5에서 추가된 Input 속성 pattern(정규식)을 이용한 유효성 검사

- 아이디 비밀번호 오류 시 title에 입력된 안내문구 띄우기
- 아이디 : 영문소문자, 숫자, 특수문자 10-20자 이내

```html
<input
  type="text"
  required
  pattern="^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,12}$"
  title="영문소문자, 숫자 6-12 이내"
/>
```

- 비밀번호 : 영문소문자, 숫자, 특수문자 10-20자 이내

```html
<input
  type="password"
  required
  pattern="^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{10,20}$"
  title="영문소문자, 숫자 6-12 이내"
/>
```

##### ✖️ 더 알아보기 : JS를 이용한 유효성 검사

<br>

> #### 11/2 : ✨ : JS를 이용한 유효성 검사(에러시 경고창)

- 아이디 비밀번호 오류 시 경고창, 로그인 성공 시 알림창 띄우기
- 아이디 : 영문소문자, 숫자, 특수문자 10-20자 이내
- 오류 시 useRef로 접근하여 value 초기화 및 focus시키기
- 모든 조건 충족 시 form submit

```javascript
formRef.current.reset(); // reset은 form에서만 가능
idRef.current.value = ""; // 위를 대체하여 값을 비우는 방법
idRef.current.focus(); // focus는 input에서도 가능
```

##### ✖️ 더 추가할 기능 :

- 서버에 폼 전송 후 로그인정보 없을 시 login fail 띄우기
- 아이디찾기, 비밀번호 찾기 기능
- 카카오 로그인 연동
- 아이디저장, 자동로그인(쿠키)

<br>

> #### 11/5 : ✨ : detail search 상세검색 컴포넌트 생성

- checkBox 컴포넌트화, radios 컴포넌트화, checkList 컴포넌트화
- checkBox의 checked 여부가 변경될 때 마다 서버에 전송하기 위해 state에 저장 및 코드 개선
- 같은 종류의 checkBox나 radios들을 통일하는 방법 : name을 통일한다.

```jsx
  <label><input type="checkbox" name="color" value="blue"> Blue</label> // color : blue로 전달됨
  <label><input type="checkbox" name="color" value="red"> Red</label>
```

- 리스트를 mapping하여 key값을 Date.now()로 부여했지만, 동시다발적으로 리턴되어 key값에 중복 발생(Warning) : UUID 라이브러리 사용 : Universal Unique Identifier(범용 단일 식별자) 이다. uuid함수를 호출하면 랜덤으로 생성된 문자열을 만들어 준다.

```
  yarn add uuid
```

```javascript
import { v4 as uuidv4 } from "uuid";
uuidv4(); // 고유 key 생성
```

- 리액트 JSX에서 table을 사용할 때는 thead나 tbody를 사용해 주어야 한다.
- 브라우저는 tbody 태그가 필요하다. 없으면 자동으로 삽입해준다. react의 경우 처음에는 정상으로 동작하지만 다음 rendering할때는 해당 태그들이 없기에 오류가 발생할 여지가 있다. 그래서 warning 해준다.

```
`Warning: validateDOMNesting(...): <tr> cannot appear as a child of <table>.
Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser`
```

- checkBox 디테일한 스타일 디자인 확정이 안되어 혼란이 있음, Notes 목록들, 폰트, 간격크기 등 디자인 확정되면 모두 수정 바람(디자인에 따른 코드 구조도 전부 변경 필요할 듯)

##### ✖️ 더 알아보기 : 서버로 전송 시 객체로 전달 방법 고려

##### ✖️ 더 추가할 기능 :

- detail-filter 디자인확정에 따라 전체 코드 구조 및 스타일 수정
- 향 필터에서 평점 체크박스 디자인(별점) 수정 및 지속력 Bar 스타일 적용
- 객체 구조 수정하여 필터 API연동

<br>

> #### 11/12 : ✨ : Sign up 페이지 생성 및 유효성 검사

- sign up 페이지 스타일 및 유효성 검사 적용
- Ref를 배열로 생성하여 여러개의 element 접근 및 관리하기 > 체크박스 중복 제거

```javascript
// 배열로 ref 생성
const genderRef = useRef([]);

// ref의 current배열[0]번째 element로 추가
<input type="checkbox" ref={(el) => (genderRef.current[0] = el)} />;
<input type="checkbox" ref={(el) => (genderRef.current[1] = el)} />;

// ref의 elements배열 제어하기
const checkOnlyOne = (target) => {
  for (let i = 0; i < genderRef.current.length; i++) {
    if (genderRef.current[i] !== target) {
      genderRef.current[i].checked = false;
    }
  }
};
```

- Ref로 접근하여 dom의 스타일 등 값을 직접 변경하는 것은 그닥 좋지 않은 것 같다. 가급적이면 state를 통해 값을 업데이트하도록 한다.

##### ✖️ 더 추가할 기능 :

- 개인정보 수집 동의 유효성검사 요청사항 확인 후 수정, 모달창
- 객체 구조 수정하여 API 연동
- 추후 이메일 주소 확인 등 UI 추가 가능성(이메일 주소는 My page에서 수정 가능하며 아이디/비밀번호 분실 시 유효하지 않은 이메일로 가입한 유저의 경우 urscent 메일 계정으로 연락하여 처리하기로 함)

<br>

> #### 11/15 : 🐛 : ID, PW 유효성 검사 누락 수정

- 대문자 유효성 검사 누락
- 유효성 검사에서 설정한 순서대로(영문소문자 > 숫자 > 특수문자 순서) 입력 시 특수문자 입력 방지 유효성 검사가 원활하게 작동하지만, 반대 순서로 입력시(특수문자 순서 > 영문소문자 > 숫자)에는 작동하지 않음 : 앞쪽에서도 [ ] 패턴 추가하여 해결(임시)

```javascript
// 수정 전
const regexId = /^[a-z0-9](?=.*?[a-z])(?=.*?[0-9]).{5,11}$/; //특수문자를 앞쪽에서 입력하면 입력 방지 안됨

//수정 후
const regexId = /^[a-z0-9](?=.*?[a-z])(?=.*?[0-9]).{5,11}[a-z0-9]$/; //앞쪽 패턴 추가하여 특수문자 입력 방지
```

- 개인정보 동의 체크 > onChange 시 handleInputChecked실행 후 onChangeValidate이 실행되는데, 이 때 아직 privacyInfoAgree의 state 체크값이 업데이트 되기 전, 동시적으로 onChangeValidate 유효성검사가 실행되어 버튼 체크값 변경 전 값이 전달됨, 이 때문에 버튼활성화가 반대로 일어나는 현상 발생 > 렌더링 순서를 우선으로 조율 가능한지 알아보기, 일단 privacyInfoAgree의 state 값을 참조하지 않고 event.target의 checked값을 참조하도록 설정하여 체크 시 버튼활성화 기능하도록 함

```javascript
const onChecked = (event) => {
  handleInputChecked(event);
  onChangeValidate(event);
};
```

```javascript
const onChangeValidate = (event) => {
  const privacyAgree = event.target.checked;
  if (
    idCheck &&
    pwCheck &&
    pwOkCheck &&
    emailCheck &&
    email.length > 1 &&
    privacyAgree
  ) {
    setBtnActivate(true);
  } else {
    setBtnActivate(false);
  }
};
```

##### ✖️ 더 알아보기 : 렌더링 순서 세부 조정 방법

##### ✖️ 더 추가할 기능 : 추후 모든 input 유효성검사 onChange로 변경하여 버튼활성화 가능성o

## ✅ Takeaway 리팩토링 외 느낀점/개선할점

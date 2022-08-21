# cloneCoding-web2
2022 클론코딩 대회 웹2조 입니다!
대회 제출 양식에 해당하는 README는 맨 아래 작성하였습니다!!

## _네이버 블로그 화면 구현_

[![대회공지](https://avatars.githubusercontent.com/u/12232098?s=200&v=4)](https://saber-pullover-010.notion.site/5502610adcda46bfaa9896eef4b91e96)


**대회 진행:** 2022년 8월 17일(수) ~ 21일(일), 총 5일

## Introduction
**Language : Workframe: React**

제공받은 api를 활용해 **네이버 블로그** 화면을 구현해보았습니다.
- 블로그 메인 화면 구현
- 블로그 댓글 화면 구현 (선택)

### 조건
- 버튼 클릭 기능(단순히 도형 그려넣기X)이 확인되어야 하지만, 눌렀을 때 다른 화면으로 넘어가는 작업은 구현하지 않아도 됨
- 아이콘: 완전히 똑같은 모양 아니어도 됨
- 폭(너비, 가로) 길이는 아이폰 13 규격으로 진행
- 직접 네이버 블로그 앱에서 컴포넌트 작동 방식/디자인 고민

## api 정리
![api정리](/api%EC%A0%95%EB%A6%AC.jpg)

## Installation

It requires [Node.js](https://nodejs.org/)  to run.

Change directory to the project directory, and start the server :

```sh
cd naverblog_clonecoding
npm install --global yarn
npm install axios
npm install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. 

if already port-3000 is using, just kill the server and retry  it :
```sh
cd naverblog_clonecoding
npx kill-port 3000
yarn start
```

# 네이버 블로그 만들기

## 만들어야할 컴포넌트

### BlogTemplate

- 설명: 모든 컴포넌트를 차곡차곡 올릴 템플릿. 하얀색 박스. 아이폰 13 규격에 맞춰 사이즈 제단
  
### Banner

- 설명: map을 사용하여 banner api를 불러오고 렌더링.

### PostList

- 설명: 개별 포스트들을 모아둔 배열을 map을 사용하여 포스트를 렌더링
- context: 뷰 방식 클릭 유무 상태
- 기능: 뷰 방식 하나 클릭하면 진한 회색으로 변하기

### Post

- 설명: api에서 Posts 정보 받아다가 출력.
- context:  커서가 pointer로 변하는 부분들 클릭 유무 상태
- 기능: 커서가 pointer로 변하는 부분은 모두 클릭했을 때 콘솔창에 클릭했다고 뜨게 하기

## 변경 사항

### 폰트 사이즈

- 문제 상황: 폰트 사이즈가 10px 미만으로 내려가지 않음.
- 원인: 구글 설정>모양>글꼴맞춤설정>최소글꼴크기 옵션이 디폴트 10px로 맞춰져 있어서.
- 해결: 해당 코드 참조.

```javaScript
  font-size:10px;
  -webkit-transform:scale(0.5); //0.5 -> 50%
  display: inline-block;
```

### img 폴더 위치 변경

img 폴더 위치를 naverblog_clonecoding -> public으로 변경

### context관련 js 추가 ->>>> 만들다가 실패

- 클릭 상태를 관리하기 위해서 context 파일 추가함!
- 만들다가 실패해서, 대신 버튼 클릭하면 콘솔창에 어떤 버튼이 눌렸는지 뜨도록 함.

### BlogTemplate2.js

BlogTemplate.js에서 코드 고쳐도 계속 오류가 뜨길래 똑같은 내용 복붙해서 BlogTemplate2.js를 만들었음.

### 배너

- 배경은 잘 넣었고, 대신 비율 조정 해야 함. 일단 배치 조정하기 전에 풀리케 보냄!
- Banner, BannerFrame 사용안하고 그냥 Banner2에 api까지 같이 넣어버림.

# 대회 제출 README

## 코드 설명

<전체 코드 공통사항>

- styled-components 라이브러리를 사용하여 css in js 방식으로 스타일링 함.

### BlogTemplate2.js

- 모든 컴포넌트를 올릴 레이아웃.
  
### Banner2.js

- api에서 banner 정보를 불러와 렌더링.
- 데이터 로딩 과정을 비동기로 만들기 위해 async/await 구문 사용.
- useState를 사용해 로딩 중 에러 사항, 로딩 진행 상황, 요청 결과 상태를 관리함.
- useEffect 훅을 사용하여 변화가 있을 때마다 렌더링하도록 함.
- onClick 이벤트를 사용하여 배너 위 특정 버튼이 눌렸을 때 콘솔창에 어떤 버튼이 눌렸는지 안내하도록 함.

### PostList.js

- api에서 posts 정보를 불러와 렌더링.
- 기타 api에 관한 사항은 Banner2.js와 동일.
- api에서 받아온 postId를 key로 사용하여 map을 이용해 Post 컴포넌트에게 props를 넘겨주었다.
  
### Post.js

- 미리 저장해둔 썸네일 이미지를 postId에 따라 다르게 불러와 렌더링함.(api에 썸네일 정보가 없었음)
- PostList로 부터 받아온 props를 바탕으로 포스트 렌더링.
- onClick 이벤트를 사용하여 포스트 위 특정 버튼이 눌리면 콘솔창에 어떤 버튼이 눌렸는지 안내하도록 함.

## 어필할 점

- 예시로 주어진 화면의 컴포넌트 크기를 추출해 가능한 유사한 사이즈와 배치로 만들었다.
- 스터디에서 공부했던 내용을 최대한 활용할 수 있도록 고민했다.

## 클론 코딩 건의 사항

- 간식을 더 많이 줬으면 좋겠다.
- 하루 동안 빡세게 진행하는 것도 좋을거 같다.
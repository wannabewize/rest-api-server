# App Server - Step1

## API

서버 주소 : SERVER-ADDRESS

### 영화 목록 조회

- url : SERVER-ADDRESS/api/movies
- method : GET

### 영화 상세 정보 조회

- url : SERVER-ADDRESS/api/movies/{movieId}
- method : GET

### 로그인

- url : SERVER-ADDRESS/api/auth/login
- method : POST

- 유저 정보: user/1234

### 영화 댓글 작성

- url : SERVER-ADDRESS/api/movies/{movieId}/comments
- method : POST

## 설치

1. node.js 설치
1. 폴더에서 npm을 이용해서 필요 라이브러리 설치
    ```
    $ npm install
    ```
1. node server.mjs
1. 서버 동작 메시지 확인
    ```
    Server running on port 3000
    ```


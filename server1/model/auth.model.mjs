import jwt from 'jsonwebtoken';

const jwtSecret = 'jwt-secret';

export const issueToken = (id) => {
  return jwt.sign({ id }, jwtSecret);
}

export const decodeToken = (token) => {
  try {
    // 토큰 디코딩하기
    const decoded = jwt.verify(token, jwtSecret);
    console.log('decode jwt success :', decoded);
    // 요청 객체의 user 프로퍼티에 토큰에서 복호화한 내용 설정
    return { id: decoded.id, name: decoded.name };
  } catch (error) {
    console.error('jwt decode error ;', error);
    return null;
  }
};    
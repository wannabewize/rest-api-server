import { decodeToken, issueToken } from '../model/auth.model.mjs';

const testUser = {
  id: 'user',
  password: '1234',
  name: 'User',
};

export const handleLogin = (req, res, next) => {
  // check username and password
  // if valid, create a token and send it back to the client
  // if invalid, send back an error message
  const { id, password } = req.body;

  // id와 password가 유저의 ID와 비밀번호와 일치하는지 확인. TODO : hash
  if (id === testUser.id && password === testUser.password) {
    // 
    const token = issueToken(testUser.id);
    res.send({ msg: 'ok', data: token });
    return;
  }

  res.sendStatus(401);
}

// 메시지 헤더의 JWT 토큰 검사하기
export const verifyToken = (req, res, next) => {
  // 헤더의 Authorization 항목 얻기
  const token = req.get('Authorization');
  console.log('authorization :', token && token.toLowerCase());
  // 헤더 필드의 값에서 토큰 얻기

  if (!token) {
    console.error('no token');
    res.sendStatus(401);
    return;
  }

  const decoded = decodeToken(token);

  if (decoded) {
    req.user = decoded;
    next();
  }
  else {
    console.error('jwt decode error');
    res.sendStatus(401);
  }
};

export const handleTokenVerify = (req, res) => {
  const token = req.query.token;
  const decoded = decodeToken(token);
  res.send({ msg: 'ok', data: decoded });
}


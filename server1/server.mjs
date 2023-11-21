import express from 'express';
import movieRouter from './router/movie.router.mjs';
import authRouter from './router/auth.router.mjs';

const app = express();
app.use(express.json());

app.use('/api', movieRouter);
app.use('/auth', authRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
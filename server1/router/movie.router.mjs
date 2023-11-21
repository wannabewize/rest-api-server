import express from "express";
import { handleMovieList, handleMovieDetail, handleMovieCreation } from "../controller/movie.controller.mjs";
import { handleCommentCreation, handleCommentList } from '../controller/movie.controller.mjs';
import { verifyToken } from "../controller/auth.controller.mjs";

const router = express.Router();

router.get('/movies', handleMovieList);
router.post('/movies', verifyToken, handleMovieCreation);
router.get('/movies/:id', handleMovieDetail);

router.get('/movies/:id/comments', handleCommentList);
router.post('/movies/:id/comments', verifyToken, handleCommentCreation);

export default router;


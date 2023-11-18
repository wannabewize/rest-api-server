import data from './data.json' assert { type: 'json' };
import {v1} from "uuid";

let movies = data.movies;

export const getMovies = () => {
  return movies;
}

export const getMovieById = (id) => {
  return movies.find(movie => movie.id === id);
}

export const addMovie = (title, director, synopsis, actors, release) => {
  const movie = {
    id: v1(),
    title,
    director,
    synopsis: synopsis || null,
    actors: actors || null,
    release: release || null
  }

  movies.push(movie);
  return movie;
}

export const addComment = (movieId, comment) => {
  const movie = getMovieById(movieId);
  if (!movie) {
    return null;
  }

  const newComment = {
    id: v1(),
    comment
  }

  movie.comments.push(newComment);
  return newComment;
}
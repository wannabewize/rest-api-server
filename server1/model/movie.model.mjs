import data from './data.json' assert { type: 'json' };
import {v1} from "uuid";

let movies = data.movies;

export const getMovies = (keyword) => {
  const movies = data.movies.map(movie => {
    // 영화 전체 데이터 중 일부만 사용
    const { id, title, release, poster } = movie;
    return { id, title, release, poster };
  });

  // 검색어가 있으면 제목/줄거리에서 검색
  if (keyword) {
    return movies.filter(movie => {
      return movie.title.indexOf(keyword) >= 0;
    });
  }
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
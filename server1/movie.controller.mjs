import { getMovieById, getMovies, addMovie, addComment } from "./movie.model.mjs";

export const handleMovieList = (req, res) => {
    const movies = getMovies()
    res.send({msg: 'ok', data: movies});
}

export const handleMovieDetail = (req, res) => {
    const movieId = req.params.id;
    const movie = getMovieById(movieId)
    res.send({msg: 'ok', data: movie});
}

export const handleMovieCreation = (req, res) => {
    console.log('req.body :', req.body);

    const {title, director, synopsis, actors, release} = req.body;
    if ( !title || !director ) {
        res.status(400).send({msg: 'Bad Request'});
        return;
    }

    const ret = addMovie(title, director, synopsis, actors, release);
    
    res.send({msg: 'ok', data: ret});
}

export const handleCommentCreation = (req, res) => {
    const movieId = req.params.id;
    const comment = req.body.comment;
    if (!comment) {
        res.status(400).send({msg: 'Bad Request'});
        return;
    }

    const added = addComment(movieId, req.body.comment);
    res.send({msg: 'ok', data: added})
}

export const handleCommentList = (req, res) => {
    res.send("WIP");
}

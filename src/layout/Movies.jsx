import React from 'react';
import Movie from './Movie'

function Movies(props){
    const {movies} = props;

    return <div className="movies container">
        {movies.map(movie => (
            <Movie key={movie.imbdID} {...movie} />
        ))}
    </div>
}

export default Movies;
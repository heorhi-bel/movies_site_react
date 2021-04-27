import React from "react";
import Movie from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies container">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imbdID} {...movie} />)
            ) : (
                <h5>Sorry, we not founded :(</h5>
            )}
        </div>
    );
}

export default Movies;

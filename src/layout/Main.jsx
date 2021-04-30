import Movies from "../components/Movies";
import Search from "../components/Search";
import React, { useState, useEffect } from "react";
import Preloader from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (str, type = "all") => {
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
                type === "all" ? "" : `&type=${type}`
            }`
        )
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.Search);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Search searchMovies={searchMovies} />

            {!loading ? <Movies movies={movies} /> : <Preloader />}
        </main>
    );
}

export default Main;

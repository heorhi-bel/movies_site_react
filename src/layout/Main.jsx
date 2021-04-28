import Movies from "../components/Movies";
import Search from "../components/Search";
import React from "react";
import Preloader from "../components/Preloader";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount = () => {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=68db089d&s=matrix")
            .then((response) => response.json())
            .then((json) => {
                console.log(json.Search);
                this.setState({ movies: json.Search, loading: false });
            });
    };

    searchMovies = (str, type = "all") => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=68db089d&s=${str}${
                type === "all" ? "" : `&type=${type}`
            }`
        )
            .then((response) => response.json())
            .then((json) => {
                console.log(json.Search);
                this.setState({ movies: json.Search, loading: false });
            });
    };

    render() {
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />

                {!this.state.loading ? (
                    <Movies movies={this.state.movies} />
                ) : (
                    <Preloader />
                )}
            </main>
        );
    }
}

export default Main;

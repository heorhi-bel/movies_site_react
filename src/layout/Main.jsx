import Movies from '../components/Movies'
import Search from '../components/Search'
import React from 'react'
import Preloader from '../components/Preloader'

class Main extends React.Component{
    state = {
        movies: []
    }

    componentDidMount = () => {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=68db089d&s=matrix")
            .then((response) => response.json())
            .then((json) => {
                console.log(json.Search)
                this.setState({movies: json.Search});
            })
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=68db089d&s=${str}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json.Search)
                this.setState({movies: json.Search});
            })
    }

    render(){
        return (
            this.state.movies.length ? 
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                <Movies movies={this.state.movies}/>
            </main>
            :
            <Preloader />
        )
    }
}

export default Main;
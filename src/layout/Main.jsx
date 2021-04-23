import Movies from './Movies'
import React from 'react'

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

    render(){
        return (
            <main className="container content">
                <Movies movies={this.state.movies}/>
            </main>
        )
    }
}

export default Main;
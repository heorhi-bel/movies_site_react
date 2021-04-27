import React from 'react'

class Search extends React.Component{
    state = {
        search: ''
    }

    handleKey = (event) =>{
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search)
        }
    }

    render(){
        return <div className="row">
                    <div className="input-field col s12">
                        <input 
                            id="search"
                            type="search" 
                            className="validate" 
                            placeholder='search'
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}
                        />
                        <button className="btn" onClick={ () => this.props.searchMovies(this.state.search) }>SEARCH!</button>
                    </div>
                </div>
    }
}

export default Search;
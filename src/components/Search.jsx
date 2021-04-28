import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    };

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleType = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="search"
                        type="search"
                        className="validate"
                        placeholder="search"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="btn btn-align"
                        onClick={() =>
                            this.props.searchMovies(this.state.search)
                        }
                    >
                        SEARCH
                    </button>

                    <div className="filters">
                        <p>
                            <label>
                                <input
                                    name="group1"
                                    type="radio"
                                    data-type="all"
                                    onChange={this.handleType}
                                    checked={this.state.type === "all"}
                                    checked
                                />
                                <span>all</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    name="group1"
                                    type="radio"
                                    data-type="movie"
                                    onChange={this.handleType}
                                    checked={this.state.type === "movie"}
                                />
                                <span>movies only</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    name="group1"
                                    type="radio"
                                    data-type="series"
                                    onChange={this.handleType}
                                    checked={this.state.type === "series"}
                                />
                                <span>series only</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;

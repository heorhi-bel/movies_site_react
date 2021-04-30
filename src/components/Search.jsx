import React, { useState } from "react";

const Search = (props) => {
    const { searchMovies = Function.prototype } = props;

    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");

    const handleKey = (event) => {
        if (event.key === "Enter") {
            searchMovies(search, type);
        }
    };

    const handleType = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    id="search"
                    type="search"
                    className="validate"
                    placeholder="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className="btn btn-align"
                    onClick={() => searchMovies(search)}
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
                                onChange={handleType}
                                checked={type === "all"}
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
                                onChange={handleType}
                                checked={type === "movie"}
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
                                onChange={handleType}
                                checked={type === "series"}
                            />
                            <span>series only</span>
                        </label>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Search;

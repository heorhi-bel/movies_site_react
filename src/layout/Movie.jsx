function Movie(props){
    return(
        <div className="row" id={props.Id}>
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={props.Poster} />
                        <span className="card-title"> {props.Title} </span>
                    </div>
                    <div className="card-content">
                        <p> {props.Type} </p>
                        <p> {props.Year} </p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;
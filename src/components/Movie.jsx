function Movie(props){
    return(
        // <div className="row" id={props.Id}>
            <div className="col s12 m7 l2 xl1">
                {
                    props.Poster === 'N/A' ?
                    <div className="card">
                        <div className="card-image">
                            <img src={`https://via.placeholder.com/300x400?text=${props.Title}`} />
                            <span className="card-title"> {props.Title} </span>
                        </div>
                        <div className="card-content">
                            <p> {props.Type} </p>
                            <p> {props.Year} </p>
                        </div>
                        
                    </div>
                    :
                    <div className="card">
                        <div className="card-image">
                            <img src={props.Poster} />
                            <span className="card-title"> {props.Title} </span>
                        </div>
                        <div className="card-content">
                            <p> {props.Type} </p>
                            <p> {props.Year} </p>
                        </div>
                       
                    </div>
                }
                
            </div>
        // {/* </div>  */}
    )
}

export default Movie;
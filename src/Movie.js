import React from 'react';
import "./Movie.css";
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component{

//     static propTypes = {
//         title: PropTypes.string,
//         poster: PropTypes.string
//     }

//     render(){

//         return(
//             <div>
//                 <MoviePoster poster = {this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster = {poster} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {
                        genres.map((genres,index) => <MovieGenre genres={genres} key={index} />)
                    }
                </div>
                <p className="Movie__Synopsis">
                    <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis=' ...'
                    trimRight
                    basedOn='letters'
                    />
                </p>
             </div>

        </div>
 
    )
}



// class MoviePoster extends Component {
    
//     // 부모 컴포넌트에게서 받은 정보를 체크
//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }
//     render(){
//         return(
//             <img src={this.props.poster} />
//         )
//     }
// }


function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster" className="Movie__Poster"/>
    )
}


function MovieGenre({genres}){
    return (
        <span className="Movie__Genre">{genres}</span>
    )
}

Movie.prototype = {
    title: PropTypes.string.isRequired ,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired

}

MoviePoster.prototype = {
    poster: PropTypes.string.isRequired
}

MovieGenre.prototype = {
    genres: PropTypes.array.isRequired
}


export default Movie
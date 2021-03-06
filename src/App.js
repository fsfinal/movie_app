import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

componentWillMount(){
  console.log("will mount")
}

state = {}

componentDidMount(){
  this._getMovie();
}




 _getMovie = async () => {
  const movies = await this._callApi()
  this.setState({
    movies
  })
}

_callApi = () => {
  return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=download_count')
  .then(response => response.json())
  .then(json=> json.data.movies)
  .catch(err => console.log(err))
}


_renderMovie = () =>{
   const moives = this.state.movies.map(movie => {
    //  console.log(movie)
    return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres} 
      synopsis ={movie.synopsis}
      />
  })
  return moives
}
  render() {
    const {movies } = this.state;
    return (
      <div className={ movies ?"App" : "App--loading"}>
       {this.state.movies ? this._renderMovie() : 'loding'}
      </div>
    );
  }
}

export default App;

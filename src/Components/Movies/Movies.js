import React from 'react';

import Movie from '../Movie/Movie';

export default class Movies extends React.Component{

  render(){
    return (
      <div>
        <h1>Movie List</h1>
        {this.props.movies.map((movie) => {
          return (
            <Movie key={movie.imdbID} movie={movie}/>
          )
        })}
        
      </div>
    )
  }
}
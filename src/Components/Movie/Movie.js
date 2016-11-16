import React from 'react';

export default class Movie extends React.Component{

  render(){
    return (
      <div>
        <img src={this.props.movie["Poster"]} alt={this.props.movie["Title"]}/>
        <h1>{this.props.movie["Title"]}</h1>
        <h3>{this.props.movie["Actors"]}</h3>
        <p>{this.props.movie["Plot"]}</p>
      </div>
    )
  }
}
import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import Movies from './Components/Movies/Movies';

class App extends Component {
  constructor(){
    super();

    this.state = {
      movies: require("../movies.json")
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tech Talent South Movies!</h2>
        </div>
        <Movies movies={this.state.movies}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './header'
import './styles/App.css';
import MoviesCarousel from './moviescarousel.js'

class App extends Component {

  render()  {
  return (
    <div className="App-container">
      <div className="App">
        <Header />
        <MoviesCarousel />
      </div>
    </div>
  )};
}

export default App;

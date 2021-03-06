import React, { Component } from 'react';
import Header from './header'
import './styles/App.css';
import NowPlaying from './NowPlaying'
import UpcomingCarousel from './UpcomingCarousel'
import Backdrop from './Backdrop'

class App extends Component {

  render()  {
  return (
    <div className="App-container">
      <div className="App">
        <Header />
        <Backdrop />
        <NowPlaying />
        <UpcomingCarousel />
      </div>
    </div>
  )};
}

export default App;

import React, { useState } from 'react';
import WelcomeNavbar from "./welcome/WelcomeNavbar";
import WelcomeCarousel from "./welcome/WelcomeCarousel";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <WelcomeNavbar />
        <WelcomeCarousel />
      </React.Fragment>
    )
  }
};

export default App;

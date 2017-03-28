import React, { Component } from 'react';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Strawberry from './components/content/Strawberry';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Gallery></Gallery>
        <Strawberry></Strawberry>
      </div>
    );
  }
}

export default App;

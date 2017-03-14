import React, { Component } from 'react';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Gallery></Gallery>
      </div>
    );
  }
}

export default App;

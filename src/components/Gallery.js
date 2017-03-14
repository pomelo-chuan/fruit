import React, { Component } from 'react';
import '../styles/gallery.css';
import gallery from '../images/cakes.jpg'
class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
          <img src={gallery}/>
      </div>
    );
  }
}

export default Gallery;

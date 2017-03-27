import React, { Component } from 'react';
import '../styles/nav.css';

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <a href='#'>端正果蔬园</a>
        </div>
        <div className="nav-clear"></div>
      </div>
    );
  }
}

export default Nav;

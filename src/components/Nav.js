import React, { Component } from 'react';
import '../styles/nav.css';
import icon from '../images/icon.png';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
          <ul>
              <li><img src={icon} className="icon" alt=""/></li>
              <li><a href="#">主页</a></li>
              <li><a href="#">产品</a></li>
              <li><a href="#">关于</a></li>
          </ul>
      </div>
    );
  }
}

export default Nav;

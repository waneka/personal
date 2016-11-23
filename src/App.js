import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-sidebar">
          <IndexLink to="/" className="Sidebar-link">
            <div className="Sidebar-name">
              Tyler Waneka
            </div>
          </IndexLink>
          <div className="Sidebar-border-bottom">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Link to="/tools" className="Sidebar-link">
            <div className="Sidebar-link-wrapper">
              Tools
            </div>
          </Link>
          <Link to="/blogs" className="Sidebar-link">
            <div className="Sidebar-link-wrapper">
              Blogs
            </div>
          </Link>
          <Link to="/contact" className="Sidebar-link">
            <div className="Sidebar-link-wrapper">
              Contact
            </div>
          </Link>
        </div>
        <div className="Main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

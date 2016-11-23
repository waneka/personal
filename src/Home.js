import React from 'react';
import { Link } from 'react-router';

import TylerMill from './images/TylerMill.jpg'

class Home extends React.Component {
  render() {
    return (
      <div className="Home-content">
        <div className="flex">
          <img className="Home-image" src={TylerMill} alt=""/>
          <div className="Home-text">
            <div className="font--h1">Well,</div>
            <div className="font--h1">hello there.</div>
            <div>It's nice to meet you. I'm a software engineer based in San Francisco and I love making beautiful and meaningful things for the web.</div>
            <div>If you'd like to talk more, <Link to="/contact" className="link--obvious">drop me a line</Link>.</div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;

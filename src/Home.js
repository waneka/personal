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
            <div className="mt">It's nice to meet you. I'm a software engineer based in San Francisco and I love to make beautiful and meaningful things for the web.</div>
            <div>If you'd like to talk more, <Link to="/contact" className="link--obvious">drop me a line</Link>.</div>
          </div>
        </div>
        <div className="Home-text Home-text-bottom">
          <div>
            I am a maker at heart. Whether it's building web applications or crafting leather wallets, I'm at my best when I'm creating. There's nothing more rewarding to me than building something meaningful from scratch. In craftsmanship, persistence and tenacity are key to success.
          </div>
          <div className="mt">
            When I'm not behind a computer, you can probably find me spending time with my wonderful wife and golden retriever. I love watching <a href="http://bavbb.com/who-we-are" className="link--obvious">and playing</a> baseball, running through Golden Gate Park, barbecuing with friends, and exploring the incredible city of San Francisco. I find endless inspiration from the music library of <a href="http://asthmatickitty.com/artists/sufjan-stevens/" className="link--obvious">Sufjan Stevens</a>. And I will never ever turn down a good cup of coffee. Ever.
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;

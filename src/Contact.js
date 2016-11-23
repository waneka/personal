import React from 'react';

function Contact(props) {
  return (
    <div className="Contact-content">
      <div className="Contact-title">Contact</div>
      <div className="mt">Where you can find me:</div>
      <div className=""><a href="https://twitter.com/waneka" className="link--obvious">Twitter</a></div>
      <div className=""><a href="https://github.com/waneka" className="link--obvious">GitHub</a></div>
      <div className=""><a href="https://www.linkedin.com/in/tyler-waneka-6b070775" className="link--obvious">LinkedIn</a></div>
      <div className="mt">Or drop me a line at <a href="mailto:twwaneka@gmail.com" className="link--obvious">twwaneka@gmail.com</a></div>
    </div>
  );
}

Contact.propTypes = {};

export default Contact;

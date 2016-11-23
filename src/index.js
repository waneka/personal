import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import Tools from './Tools';
import Contact from './Contact';
import Blogs from './Blogs';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="tools" component={Tools} />
      <Route path="contact" component={Contact} />
      <Route path="blogs" component={Blogs} />
    </Route>
  </Router>
), document.getElementById('root'));

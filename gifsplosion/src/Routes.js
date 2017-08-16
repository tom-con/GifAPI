import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
);

export default Routes;

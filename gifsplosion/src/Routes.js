import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App';


// Encasing the app in Router so that endpoints match RESTful standards
const Routes = (props) => (
  <Router {...props}>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
);

export default Routes;

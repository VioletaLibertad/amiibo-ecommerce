import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home/index';
import Checkout from './views/Checkout/index';
import * as routes from './routes';

function App() {
  return (
    <Router>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.checkout} component={Checkout} />
    </Router>
  );
}

export default App;

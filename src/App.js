import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home/index';
import Checkout from './views/Checkout/index';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/checkout" component={Checkout} />
    </Router>
  );
}

export default App;

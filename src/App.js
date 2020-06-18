import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import Home from './views/Home/index';
import Checkout from './views/Checkout/index';
import * as routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.checkout} component={Checkout} />
      </Router>
    </Provider>
  );
}

export default App;

import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './Navbar';
import Results from './Results';
import Details from './Details';
import SearchParams from './SearchParams';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Router, Link } from '@reach/router';

import Results from './Results';
import Details from './Details';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt a Pet</Link>
        </header>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

export default App;

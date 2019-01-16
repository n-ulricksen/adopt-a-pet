import React, { Component } from 'react';
import { Router } from '@reach/router';
import pf from 'petfinder-client';
import { Provider } from './SearchContext';

import Navbar from './Navbar';
import Results from './Results';
import Details from './Details';
import SearchParams from './SearchParams';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'Turlock, CA',
      animal: '',
      breed: '',
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.handleLocationChange
    };
  }

  handleLocationChange = e => {
    this.setState({
      location: e.target.value
    });
  };

  handleAnimalChange = e => {
    this.setState(
      {
        animal: e.target.value,
        breed: ''
      },
      this.getBreeds
    );
  };

  getBreeds = () => {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({
            breeds: data.petfinder.breeds.breed
          });
        } else {
          this.setState({
            breeds: []
          });
        }
      });
    } else {
      this.setState({
        breeds: []
      });
    }
  };

  handleBreedChange = e => {
    this.setState({
      breed: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Provider value={this.state}>
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

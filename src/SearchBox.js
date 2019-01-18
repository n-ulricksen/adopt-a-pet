import React, { Component } from 'react';
import { ANIMALS } from 'petfinder-client';
import { connect } from 'react-redux';

import getBreeds from './actionCreators/getBreeds';
import changeBreed from './actionCreators/changeBreed';
import changeAnimal from './actionCreators/changeAnimal';
import changeLocation from './actionCreators/changeLocation';

class SearchBox extends Component {
  handleFormSubmit = e => {
    e.preventDefault();

    this.props.search();
  };

  render() {
    return (
      <div className="search-params">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="location">
            Location:
            <input
              type="text"
              id="location"
              name="location"
              value={this.props.location}
              onChange={this.props.handleLocationChange}
              placeholder="Location"
            />
          </label>
          <label htmlFor="animal">
            Animal:
            <select
              type="text"
              id="animal"
              name="animal"
              value={this.props.animal}
              onChange={this.props.handleAnimalChange}
              onBlur={this.props.handleInputChange}
            >
              <option />
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed:
            <select
              type="text"
              id="breed"
              name="breed"
              value={this.props.breed}
              onChange={this.props.handleBreedChange}
              onBlur={this.props.handleBreedChange}
              disabled={this.props.breeds.length === 0}
            >
              <option />
              {this.props.breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
            <button>Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ breed, breeds, animal, location }) => ({
  breed,
  breeds,
  animal,
  location
});

const mapDispatchToProps = dispatch => ({
  handleAnimalChange(e) {
    dispatch(changeAnimal(e.target.value));
    dispatch(getBreeds());
  },
  handleBreedChange(e) {
    dispatch(changeBreed(e.target.value));
  },
  handleLocationChange(e) {
    dispatch(changeLocation(e.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);

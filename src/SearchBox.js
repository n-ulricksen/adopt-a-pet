import React, { Component } from 'react';
import { ANIMALS } from 'petfinder-client';
import { Consumer } from './SearchContext';

class SearchBox extends Component {
  handleFormSubmit = e => {
    e.preventDefault();

    this.props.search();
  };

  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                Location:
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={context.location}
                  onChange={context.handleLocationChange}
                  placeholder="Location"
                />
              </label>
              <label htmlFor="animal">
                Animal:
                <select
                  type="text"
                  id="animal"
                  name="animal"
                  value={context.animal}
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleInputChange}
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
                  value={context.breed}
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  disabled={context.breeds.length === 0}
                >
                  <option />
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
                <button>Submit</button>
              </label>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;

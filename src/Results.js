import React, { Component } from 'react';
import pf from 'petfinder-client';
import { Consumer } from './SearchContext';

import Pet from './Pet';
import SearchBox from './SearchBox';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  search = () => {
    petfinder.pet
      .find({
        output: 'full',
        location: this.props.searchParams.location,
        animal: this.props.searchParams.animal,
        breed: this.props.searchParams.breed
      })
      .then(data => {
        let pets;
        const { petfinder } = data;

        if (petfinder.pets && petfinder.pets.pet) {
          if (Array.isArray(petfinder.pets.pet)) {
            pets = petfinder.pets.pet;
          } else {
            pets = [petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({ pets });
      });
  };

  componentDidMount() {
    this.search();
  }

  render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => {
          let breed;

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(', ');
          } else {
            breed = pet.breeds.breed;
          }

          return (
            <Pet
              key={pet.id}
              name={pet.name}
              animal={pet.animal}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

export default function ResultsWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}

import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    photos: [],
    active: 0,
    hero: ''
  };

  componentDidMount() {
    const { media } = this.props;

    let photos = [];
    let hero;

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo['@size'] === 'pn');
    }

    if (photos.length) {
      hero = photos[0].value;
    } else {
      hero = 'http://placecorgi.com/300/300';
    }

    this.setState({ photos, hero });
  }

  handleIndexClick = e => {
    const { index } = e.target.dataset;
    const hero = this.state.photos[index].value;

    this.setState({
      active: index,
      hero
    });
  };

  render() {
    const { photos, active, hero } = this.state;

    return (
      <div className="carousel">
        <img src={hero} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              src={photo.value}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

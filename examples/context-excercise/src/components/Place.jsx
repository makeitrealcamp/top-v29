import PropTypes from 'prop-types';

import PlaceImage from './PlaceImage';

function Place({ place, imageSize }) {
  return (
    <>
      <PlaceImage
        place={place}
        imageSize={imageSize}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

Place.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  imageSize: PropTypes.number.isRequired,
};

export default Place;

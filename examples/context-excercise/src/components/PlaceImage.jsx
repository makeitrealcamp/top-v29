import PropTypes from 'prop-types';

import { getImageUrl } from '../utils/image';

function PlaceImage({ place, imageSize }) {
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

PlaceImage.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  imageSize: PropTypes.number.isRequired,
};

export default PlaceImage;

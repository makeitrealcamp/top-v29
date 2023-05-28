import PropTypes from 'prop-types';

import { places } from '../assets/data';
import Place from './Place';

function List({ imageSize }) {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
        imageSize={imageSize}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

List.propTypes = {
  imageSize: PropTypes.number.isRequired,
};

export default List;

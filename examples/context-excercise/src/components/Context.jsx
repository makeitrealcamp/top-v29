import { createContext } from 'react';
import PropTypes from 'prop-types';

export const ImageSizeContext = createContext(500);

export const ImageSizeProvider = ({ children, imageSize }) => (
  <ImageSizeContext.Provider value={imageSize}>
    {children}
  </ImageSizeContext.Provider>
)

ImageSizeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  imageSize: PropTypes.number.isRequired,
};

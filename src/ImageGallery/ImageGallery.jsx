import scss from './ImageGallery.module.scss';
import PropTypes from 'prop-types';

const ImageGallery = ({ children }) => {
  return <ul className={scss.ImageGallery}>{children}</ul>;
};

ImageGallery.protoTypes = {
  children: PropTypes.element,
};

export default ImageGallery;

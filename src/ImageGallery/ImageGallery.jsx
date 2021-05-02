import scss from './ImageGallery.module.scss';

const ImageGallery = ({ children }) => {
  return <ul className={scss.ImageGallery}>{children}</ul>;
};

export default ImageGallery;

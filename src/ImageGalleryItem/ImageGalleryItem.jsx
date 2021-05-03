import scss from './ImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imgData, showModal, name }) => {
  return (
    <>
      {imgData.map((item) => (
        <li className={scss.ImageGalleryItem} key={item.id}>
          <img
            onClick={() => showModal(item.largeUrl)}
            src={item.url}
            alt={name}
            className={scss.ImageGalleryItem__image}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  imgData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeUrl: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  showModal: PropTypes.func,
  name: PropTypes.string,
};

export default ImageGalleryItem;

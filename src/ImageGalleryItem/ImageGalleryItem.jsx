import scss from './ImageGalleryItem.module.scss';

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

export default ImageGalleryItem;

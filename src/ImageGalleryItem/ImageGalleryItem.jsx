import scss from './ImageGalleryItem.module.scss';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    name: '',
    img: [],
    largeUrl: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const imgName = this.props.imgName;
    if (prevProps.imgName !== imgName) {
      this.setState({
        name: imgName,
      });
      fetch(
        `https://pixabay.com/api/?q=${imgName}&page=1&key=20626801-2d87cc5d65955ac685972c705&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then(({ hits }) => {
          const obj = hits.map((item) => {
            return {
              id: item.id,
              url: item.webformatURL,
              largeUrl: item.largeImageURL,
            };
          });
          this.setState({
            img: [...obj],
          });
        });
    }
  }

  render() {
    return (
      <>
        {this.state.name && (
          <>
            {this.state.img.map((item) => (
              <li className={scss.ImageGalleryItem} key={item.id}>
                <img
                  largeurl={item.largeUrl}
                  onClick={() => this.props.showModal(item.largeUrl)}
                  src={item.url}
                  alt={this.state.name}
                  className={scss.ImageGalleryItem__image}
                />
              </li>
            ))}
          </>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

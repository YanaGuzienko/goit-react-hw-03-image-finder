import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';

// import { BASE_URL } from './Api/Api';

class App extends Component {
  state = {
    img: [],
    name: '',
    showModal: false,
    largeUrl: '',
    currentPage: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      this.fetchImg();
    }
  }

  fetchImg = () => {
    this.setState({
      isLoading: true,
    });

    fetch(
      `https://pixabay.com/api/?q=${this.state.name}&page=${this.state.currentPage}&key=20626801-2d87cc5d65955ac685972c705&image_type=photo&orientation=horizontal&per_page=12`
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
        this.setState((prevState) => ({
          img: [...prevState.img, ...obj],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(())
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  };

  onClickImg = (url) => {
    this.setState({
      largeUrl: url,
    });
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  onSearchSubmit = (data) => {
    this.setState({
      name: data.name,
      currentPage: 1,
      img: [],
    });
  };

  render() {
    const shouldRenderLoadMore = this.state.img.length > 0;
    return (
      <>
        {this.state.showModal && (
          <Modal showModal={this.onClickImg}>
            <img src={this.state.largeUrl} alt={this.state.name} />
          </Modal>
        )}
        <Searchbar onSubmit={this.onSearchSubmit} />
        {this.state.name && (
          <ImageGallery>
            <ImageGalleryItem showModal={this.onClickImg} imgData={this.state.img} name={this.state.name} />
          </ImageGallery>
        )}

        {shouldRenderLoadMore && (
          <Button onClick={this.fetchImg}>
            <Loader isLoading={this.state.isLoading} />
          </Button>
        )}
      </>
    );
  }
}

export default App;

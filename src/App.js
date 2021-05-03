import { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import api from './Api/Api';

class App extends Component {
  static propTypes = {
    img: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        largeUrl: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    name: PropTypes.string,
    showModal: PropTypes.bool,
    largeUrl: PropTypes.string,
    currentPage: PropTypes.number,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
  };

  state = {
    img: [],
    name: '',
    showModal: false,
    largeUrl: '',
    currentPage: 1,
    isLoading: false,
    error: null,
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

    api
      .fetchImages(this.state.name, this.state.currentPage)
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
      .catch((error) => {
        this.setState({ error });
        toast.error('Oops ... Something went wrong ... try again');
      })
      .finally(() => {
        if (this.state.currentPage > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
        if (this.state.img.length === 0) {
          toast.error('Enter the correct name');
        }
        this.setState({
          isLoading: false,
        });
      });
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
        {this.state.error && <h1>Oops ... Something went wrong ... try again</h1>}

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
        <ToastContainer position='top-center' autoClose={3000} />
      </>
    );
  }
}

export default App;

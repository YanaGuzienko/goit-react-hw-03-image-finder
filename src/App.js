import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
// import { BASE_URL } from './Api/Api';

class App extends Component {
  state = {
    name: '',
    showModal: false,
    largeUrl: '',
  };

  toggleModal = (e) => {
    console.log(e.currentTarget);
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  // getUrl = (url) => {
  //   this.setState({
  //     largeUrl: url,
  //   });
  // };

  onSearchSubmit = (data) => {
    this.setState({
      name: data.name,
    });
  };

  render() {
    return (
      <>
        {this.state.showModal && (
          <Modal showModal={this.toggleModal}>
            <img src='' alt='' />
          </Modal>
        )}
        <Searchbar onSubmit={this.onSearchSubmit} />
        <ImageGallery>
          <ImageGalleryItem imgName={this.state.name} showModal={this.toggleModal} getUrl={this.getUrl} />
        </ImageGallery>
      </>
    );
  }
}

export default App;

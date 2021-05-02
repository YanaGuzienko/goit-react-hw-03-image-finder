import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import Button from './Button/Button';
// import { BASE_URL } from './Api/Api';

class App extends Component {
  state = {
    name: '',
    showModal: false,
    largeUrl: '',
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
    });
  };

  render() {
    return (
      <>
        {this.state.showModal && (
          <Modal showModal={this.onClickImg}>
            <img src={this.state.largeUrl} alt={this.state.name} />
          </Modal>
        )}
        <Searchbar onSubmit={this.onSearchSubmit} />
        <ImageGallery>
          <ImageGalleryItem imgName={this.state.name} showModal={this.onClickImg} getUrl={this.getUrl} />
        </ImageGallery>
        {this.state.name && <Button />}
      </>
    );
  }
}

export default App;

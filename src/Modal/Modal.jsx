import scss from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.showModal();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.showModal();
    }
  };

  render() {
    return createPortal(
      <div className={scss.Overlay} onClick={this.handleBackdropClick}>
        <div className={scss.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

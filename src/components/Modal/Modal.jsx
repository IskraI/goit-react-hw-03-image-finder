import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import css from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKeydown);

    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKeydown);

    document.documentElement.style.overflow = 'unset';
  }

  handleEscKeydown = e => {
    const KEY_CODE = 'Escape';

    if (e.key === KEY_CODE) {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    // const { largeImageURL, tags } = this.props;

    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          {this.props.children}
          <img
            src="https://pixabay.com/get/ge0ee6426ffb244b0d4ca834eb73a61f68315f32a42c8113b2f71069e624c60c147cb182c3cfcc07cf890ae024304741cc3e1554ebdcfd0dda97bf59b39a6fc05_1280.jpg"
            alt=""
          />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

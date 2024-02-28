import React, { Component } from 'react';

import styles from './styles.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByEsc);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEsc);
    document.body.style.overflow = 'auto';
  }

  closeModalByEsc = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handlerCloseModal = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { src, tags } = this.props;
    return (
      <div className={styles.overlay} onClick={this.handlerCloseModal}>
        <div className={styles.modal}>
          <img src={src} alt={tags} />
        </div>
      </div>
    );
  }
}

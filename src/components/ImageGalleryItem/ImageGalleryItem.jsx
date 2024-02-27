import React, { Component } from 'react';

import { Modal } from '../Modal/Modal';

import styles from './styles.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    window.addEventListener('keydown', this.closeModalByEsc);
    document.body.style.overflow = 'hidden';
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    window.removeEventListener('keydown', this.closeModalByEsc);
    document.body.style.overflow = 'auto';
  };

  closeModalByEsc = event => {
    if (event.code === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    const { smallImgSrc, largeImgSrc, tags } = this.props;
    return (
      <>
        <li className={styles['gallery-item']} onClick={this.openModal}>
          <img className={styles.image} src={smallImgSrc} alt={tags} />
        </li>
        {this.state.isModalOpen && (
          <Modal src={largeImgSrc} tags={tags} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

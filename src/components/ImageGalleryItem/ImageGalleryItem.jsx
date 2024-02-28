import React, { Component } from 'react';

import { Modal } from '../Modal/Modal';

import styles from './styles.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
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

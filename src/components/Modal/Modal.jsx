import React from 'react';

import styles from './styles.module.css';

export const Modal = ({ src, tags, closeModal }) => {
  const handlerCloseModal = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  return (
    <div className={styles.overlay} onClick={handlerCloseModal}>
      <div className={styles.modal}>
        <img src={src} alt={tags} />
      </div>
    </div>
  );
};

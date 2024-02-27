import React from 'react';

import styles from './styles.module.css';

export const Button = ({ onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
};

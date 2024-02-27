import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import styles from './styles.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImgSrc={webformatURL}
          largeImgSrc={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};

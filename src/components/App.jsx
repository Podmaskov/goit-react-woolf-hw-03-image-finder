import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { getImages } from '../api/pixabayApi';
import styles from './styles.module.css';
import 'react-toastify/dist/ReactToastify.min.css';
export class App extends Component {
  state = { images: [], totalHits: 0, page: 1, query: '', isLoading: false };

  handlerSearchSubmit = async query => {
    try {
      this.setState({ images: [], isLoading: true });
      const response = await getImages(query, 1);
      const { images: newImages, totalHits } = response;

      if (newImages.length === 0) {
        toast.info('Unfortunately, there are no images on your request');
        return;
      }

      this.setState({
        images: [...newImages],
        totalHits,
        page: 1,
        query,
      });
    } catch (error) {
      toast.error('Sorry, something went wrong. Try again');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreImages = async () => {
    try {
      this.setState({ isLoading: true });
      const { page, query } = this.state;
      const response = await getImages(query, page + 1);
      const newImages = response.images;
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        page: prevState.page + 1,
      }));
    } catch (error) {
      toast.error('Sorry, something went wrong. Try again');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  renderLoadMoreBtn = () => {
    const { images, totalHits, isLoading } = this.state;
    return (
      !!images.length &&
      images.length < totalHits &&
      !isLoading && <Button onClick={this.loadMoreImages} />
    );
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handlerSearchSubmit} />
        <ImageGallery images={images} />
        <div className={styles['btn-wrap']}>
          <ThreeDots
            visible={isLoading}
            height="80"
            width="80"
            color="#ce3762"
            radius="9"
            ariaLabel="three-dots-loading"
          />
          {this.renderLoadMoreBtn()}
        </div>
        <ToastContainer />
      </div>
    );
  }
}

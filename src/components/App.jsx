import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    showModal: false,
    modalImageUrl: '',
  };
  handleSearch = query => {
    this.setState({ isLoading: true, searchTerm: query });
    const apiKey = '39839241-704274f87aa8f04feb3efe04f';
    const url = `https://pixabay.com/api/?q=${query}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data.hits, isLoading: false });
      })
      .catch(error => alert('Error fetching data:', error));
  };
  handleLoadMore = () => {
    const apiKey = '39839241-704274f87aa8f04feb3efe04f';
    const currentPage = Math.ceil(this.state.images.length / 12) + 1;
    const url = `https://pixabay.com/api/?q=${this.state.searchTerm}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          isLoading: false,
        }));
      })
      .catch(error => console.error('Error fetching data:', error));
    this.setState({ isLoading: false });
  };
  handleImageClick = imageUrl => {
    const clickedImage = this.state.images.find(
      image => image.webformatURL === imageUrl
    );
    if (clickedImage) {
      this.setState({
        showModal: true,
        modalImageUrl: clickedImage.largeImageURL,
      });
    }
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, modalImageUrl: '' });
  };
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.App}>
          <Searchbar onSubmit={this.handleSearch} />
          <ImageGallery
            images={this.state.images}
            onImageClick={this.handleImageClick}
          />

          {this.state.isLoading && <Loader />}
          {this.state.showModal && (
            <Modal
              imageUrl={this.state.modalImageUrl}
              onClose={this.handleCloseModal}
            />
          )}
          <ImageGallery onImageClick={this.handleImageClick}>
            {this.state.images.map(image => (
              <ImageGalleryItem
                key={image.id}
                image={image.webformatURL}
                onImageClick={this.handleImageClick}
              />
            ))}
          </ImageGallery>
          <Button
            onClick={this.handleLoadMore}
            showButton={this.state.images.length > 0}
          />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          src={this.props.image}
          alt="Imagen"
          className={styles.ImageGalleryItem__image}
          onClick={() => this.props.onImageClick(this.props.image)}
        />
      </li>
    );
  }
}

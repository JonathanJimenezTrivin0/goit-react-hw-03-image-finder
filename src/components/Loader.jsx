import React, { Component } from 'react';
import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    );
  }
}

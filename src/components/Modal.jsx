import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className={styles.Overlay} onClick={this.props.onClose}>
        <div className={styles.Modal} onClick={e => e.stopPropagation()}>
          <img src={this.props.imageUrl} alt="" />
        </div>
      </div>
    );
  }
}

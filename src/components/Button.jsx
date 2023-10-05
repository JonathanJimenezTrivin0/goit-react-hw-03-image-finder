import React, { Component } from 'react';
import styles from './Button.module.css';

export default class Button extends Component {
  render() {
    if (this.props.showButton) {
      return (
        <button className={styles.Button} onClick={this.props.onClick}>
          Load more
        </button>
      );
    } else {
      return null;
    }
  }
}

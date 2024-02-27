import React, { Component } from 'react';

import styles from './styles.module.css';

export class Searchbar extends Component {
  state = { value: '' };

  handleQueryChange = event => {
    this.setState({ value: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles['search-form']}>
          <button
            type="submit"
            className={styles.button}
            onClick={this.handleSubmit}
          >
            <span className={styles['button-label']}>Search</span>
          </button>

          <input
            className={styles['search-form-input']}
            value={this.state.value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}

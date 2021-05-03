import scss from './Searchbar.module.scss';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  state = {
    name: '',
  };

  onChange = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      name: value.toLowerCase(),
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <header className={scss.Searchbar}>
        <form className={scss.SearchForm} onSubmit={this.handleOnSubmit}>
          <button type='submit' className={scss.SearchForm__button}>
            <span className={scss.SearchForm__btnlabel}></span>
          </button>
          <input
            onChange={this.onChange}
            value={this.state.name}
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
            className={scss.SearchForm__input}
          ></input>
        </form>
      </header>
    );
  }
}

export default Searchbar;

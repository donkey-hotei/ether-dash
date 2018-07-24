import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MemoInput.css';

export default class MemoInput extends Component {
  constructor(props) {
    super(props);
    const { memo } = this.props;

    this.state = {
      value: memo,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleEnter(event) {
    const { hash, updateMemo } = this.props;
    if (event.charCode === 13) {
      const memo = event.target.value;
      updateMemo(hash, memo);
    }
  }

  render() {
    const { value } = this.state;
    return (
      <input
        className="Memo-input"
        type="text"
        value={value}
        onKeyPress={this.handleEnter}
        onChange={this.handleChange}
      />
    );
  }
}

MemoInput.propTypes = {
  updateMemo: PropTypes.func.isRequired,
  hash: PropTypes.string.isRequired,
  memo: PropTypes.string.isRequired,
};

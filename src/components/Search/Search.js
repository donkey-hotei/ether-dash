import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { validate } from 'wallet-address-validator';
import Loading from '../Loading';
import './Search.css';

/*
 * The Search component allows a user to search for transactions.
 */
class Search extends Component {
  constructor() {
    super();

    this.state = {
      addressQuery: '',
      isValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const addressQuery = event.target.value;
    this.setState({ addressQuery });
    const isValid = validate(addressQuery, 'ETH');
    this.setState({ isValid });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { isValid, addressQuery } = this.state;
    const {
      updateAddress,
      getTransactions,
      address,
      page,
    } = this.props;
    if (!isValid) return;
    if (addressQuery !== address) {
      updateAddress(addressQuery);
      getTransactions(addressQuery, page);
    }
  }

  render() {
    const { addressQuery, loading } = this.state;

    return (
      <div className="Search">
        <div>
          <form onSubmit={this.handleSubmit}>
            <span className="Search-icon" />
            <input
              onChange={this.handleChange}
              type="text"
              className="Search-input"
              placeholder="Wallet Address"
              value={addressQuery}
            />

            {loading && (
              <div className="Search-loading">
                <Loading
                  width="12px"
                  height="12px"
                />
              </div>)}
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  updateAddress: PropTypes.func.isRequired,
  getTransactions: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};


export default Search;

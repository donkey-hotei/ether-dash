import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Pages from './Pages';
import TableContainer from '../containers/TableContainer';

/*
 * TransactionList contains a list of transactions.
 */
class List extends Component {
  constructor() {
    super();

    this.state = {
      totalPages: 20,
    };

    this.handlePagination = this.handlePagination.bind(this);
  }

  handlePagination(direction) {
    const { getTransactions, page, address } = this.props;
    let nextPage = page;

    nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;
    getTransactions(address, nextPage);
  }

  render() {
    const {
      totalPages,
    } = this.state;

    const { loading, page, error } = this.props;

    if (error) {
      return (
        <div>
          Error
        </div>
      );
    }

    if (loading) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    }

    return (
      <div>
        <TableContainer />
        <Pages
          page={page}
          totalPages={totalPages}
          handlePaginationClick={this.handlePagination}
        />
      </div>
    );
  }
}

List.propTypes = {
  address: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired,
  getTransactions: PropTypes.func.isRequired,
};

export default List;

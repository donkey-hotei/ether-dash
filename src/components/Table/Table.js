import React from 'react';
import PropTypes from 'prop-types';
import TransactionEntry from '../TransactionEntry';
import './Table.css';

/*
 * A Table displays transactions.
 */
const Table = (props) => {
  const { transactions, memos } = props;
  if (transactions.length < 1) {
    return (
      <div className="Table-nothing">
        No Transactions found. Try entering an address above.
      </div>
    );
  }
  return (
    <div className="Table-container">
      <table className="Table">
        <thead className="Table-head">
          <tr>
            <th>
              Time
            </th>
            <th>
              From
            </th>
            <th>
              To
            </th>
            <th>
              Input
            </th>
            <th>
              Output
            </th>
            <th>
              Tx Hash
            </th>
            <th>
              Memo
            </th>
          </tr>
        </thead>
        <tbody className="Table-body">
          {
            transactions.map(transaction => (
              <TransactionEntry
                key={transaction.uuid}
                memos={memos}
                transaction={transaction}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  memos: PropTypes.arrayOf(PropTypes.object).isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;

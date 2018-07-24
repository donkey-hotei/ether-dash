import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import MemoInputContainer from '../../containers/MemoInputContainer';

/*
 * A single entry for a transaction.
 */
const TransactionEntry = ({ transaction, memos }) => {
  const {
    timeStamp,
    from,
    to,
    gas,
    value,
    hash,
  } = transaction;
  const time = moment.unix(timeStamp).format('MM/DD/YYYY');

  return (
    <tr key={transaction.hash}>
      <td>
        <span className="Table-date">
          {time}
        </span>
      </td>
      <td>
        <span className="truncate">
          {from}
        </span>
      </td>
      <td>
        {to}
      </td>
      <td>
        {gas}
      </td>
      <td>
        {value}
      </td>
      <td>
        {hash}
      </td>
      <td>
        <MemoInputContainer
          hash={hash}
          memo={memos[hash] || ''}
        />
      </td>
    </tr>
  );
};

TransactionEntry.propTypes = {
  transaction: PropTypes.shape({
    timeStamp: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    gas: PropTypes.number,
    value: PropTypes.number,
    hash: PropTypes.string,
  }).isRequired,
  memos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionEntry;

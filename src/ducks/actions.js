import client from '../api/client';
import {
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAILURE,
  UPDATE_PAGE_COUNTER,
  UPDATE_ADDRESS,
  UPDATE_MEMO,
} from './constants';

export const getTransactionsRequest = () => (
  {
    type: GET_TRANSACTIONS_REQUEST,
  }
);

export const getTransactionsSuccess = transactions => (
  {
    type: GET_TRANSACTIONS_SUCCESS,
    result: transactions.result,
  }
);

export const getTransactionsFailure = error => (
  {
    type: GET_TRANSACTIONS_FAILURE,
    error,
  }
);

export const updatePageCounter = page => (
  {
    type: UPDATE_PAGE_COUNTER,
    page,
  }
);

export const updateAddress = address => (
  {
    type: UPDATE_ADDRESS,
    address,
  }
);

export const updateMemo = (hash, memo) => (
  {
    type: UPDATE_MEMO,
    hash,
    memo,
  }
);

/*
 * Fetches transactions for a given address.
 */
export const getTransactions = (address, page) => (dispatch) => {
  dispatch(getTransactionsRequest());
  client.get(`https://api.etherscan.io/api?address=${address}&page=${page}`)
    .then((response) => {
      const { data } = response;
      if (data.status === '0') {
        dispatch(getTransactionsFailure(data.result));
      } else {
        dispatch(getTransactionsSuccess(data));
        dispatch(updatePageCounter(page));
      }
    }).catch((error) => {
      dispatch(getTransactionsFailure(error));
    });
};

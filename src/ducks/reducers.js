import { v4 } from 'uuid';
import { combineReducers } from 'redux';
import {
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAILURE,
  UPDATE_PAGE_COUNTER,
  UPDATE_ADDRESS,
  UPDATE_MEMO,
} from './constants';

const address = (state = '', action) => {
  switch (action.type) {
    case UPDATE_ADDRESS: return action.address;
    default: return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_REQUEST: return true;
    case GET_TRANSACTIONS_SUCCESS: return false;
    case GET_TRANSACTIONS_FAILURE: return false;
    default: return state;
  }
};

const memos = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_MEMO:
      return {
        ...state,
        [action.hash]: action.memo,
      };
    default:
      return state;
  }
};

const page = (state = 1, action) => {
  switch (action.type) {
    case UPDATE_PAGE_COUNTER: return action.page;
    default: return state;
  }
};

const transactions = (state = [], action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_SUCCESS:
      return action.result.map(t => ({ ...t, uuid: v4() }));
    default:
      return state;
  }
};

const reducer = combineReducers({
  address, loading, memos, page, transactions,
});

export default reducer;

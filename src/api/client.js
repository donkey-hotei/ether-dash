import axios from 'axios';

/*
 * Etherscan API client
 */
const client = axios.create({
  baseUrl: 'https://api.etherscan.io:80',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    module: 'account',
    action: 'txlist',
    startblock: 0,
    endBlock: 99999999,
    sort: 'asc',
    offset: 10,
  },
});

export default client;

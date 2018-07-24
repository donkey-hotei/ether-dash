import React from 'react';
import SearchContainer from '../../containers/SearchContainer';
import './Header.css';

/*
 * Header lines the upper top of the page with logo.
 */
const Header = () => (
  <div className="Header">
    <SearchContainer message="No results found." />
  </div>
);

export default Header;

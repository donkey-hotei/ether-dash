import React from 'react';
import PropTypes from 'prop-types';
import './Pages.css';

/*
 * Pages implement front-end pagination.
 */
const Pages = (props) => {
  const { totalPages, page, handlePaginationClick } = props;

  return (
    <div className="Pages">
      <button
        type="submit"
        className="Pages-button"
        disabled={page <= 1}
        onClick={() => handlePaginationClick('prev')}
      >
        &larr;
      </button>

      <span className="Pages-info">
        Page
        {' '}
        <b>
          {page}
        </b>
        {' '}
          of
        {' '}
        <b>
          {totalPages}
        </b>
      </span>

      <button
        type="submit"
        className="Pages-button"
        disabled={page >= totalPages}
        onClick={() => handlePaginationClick('next')}
      >
        &rarr;
      </button>
    </div>
  );
};

Pages.propType = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

export default Pages;

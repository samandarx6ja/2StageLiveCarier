import React from 'react';

const PaginationData = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
      <a href="#">&laquo;</a>
        {pageNumbers.map(number => (
          <li key={number} className='page__item'>
            <a onClick={() => paginate(number)} href='!#' className='page__link '>
              {number}
            </a>
          </li>
        ))}
        <a href="#">&raquo;</a>
      </ul>
    </nav>
  );
};

export default PaginationData;
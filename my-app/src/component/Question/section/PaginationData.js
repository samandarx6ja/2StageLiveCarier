import React from 'react';
import { Link } from 'react-router-dom'

const PaginationData = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
      <Link to='/'>&laquo;</Link>
        {pageNumbers.map(number => (
          <li key={number} className='page__item'>
            <Link onClick={() => paginate(number)} to='/' className='page__link '>
              {number}
            </Link>
          </li>
        ))}
        <Link to='/'>&raquo;</Link>
      </ul>
    </nav>
  );
};

export default PaginationData;
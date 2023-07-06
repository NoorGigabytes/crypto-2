import React, { useState, useEffect } from 'react';
import { HiArrowLongRight, HiArrowLongLeft } from 'react-icons/hi2';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [active, setActive] = useState(1);
  const [searchQuery, setSearchQuery] = useState('')
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setActive(number);
    paginate(number);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  useEffect(() => {
    setActive(1);
    paginate(1)
  }, [totalPosts]);

  return (
    <nav>
      <ul className='flex flex-wrap justify-center items-center gap-y-3 md:text-sm text-xs'>
        {active > 1 ? (
          <li className='mx-1'>
            <button
              onClick={() => handleClick(active - 1)}
              className='font-medium rounded-md text-[#a1abb9] px-2 py-2 hover:text-primary transition-all duration-300 ease-out'
            >
              <HiArrowLongLeft />
            </button>
          </li>
        ) : null}
        {searchQuery ? null : (
          <>
            {active > 3 ? (
              <>
                <li key={1} className='mx-1'>
                  <button
                    onClick={() => handleClick(1)}
                    className='font-medium rounded-md text-[#a1abb9] px-2 py-2 hover:text-primary transition-all duration-300 ease-out'
                  >
                    1
                  </button>
                </li>
                <li className='mx-1'>
                  <span className='mx-1'>...</span>
                </li>
              </>
            ) : null}
            {pageNumbers.map(
              (number) =>
                (active <= 3 && number <= 3) ||
                (active >= pageNumbers.length - 2 && number > pageNumbers.length - 3) ||
                (number >= active - 1 && number <= active + 1) ? (
                  <li key={number} className='mx-1'>
                    <button
                      onClick={() => handleClick(number)}
                      className={`transition-all duration-300 ease-out rounded-md ${
                        active === number
                          ? 'text-primary'
                          : 'text-[#a1abb9]'
                      } font-medium px-4 py-2 hover:text-primary`}
                    >
                      {number}
                    </button>
                  </li>
                ) : null
            )}
            {active < pageNumbers.length - 2 ? (
              <>
                <li className='mx-1'>
                  <span className='mx-1'>...</span>
                </li>
                <li key={pageNumbers.length} className='mx-1'>
                  <button
                    onClick={() => handleClick(pageNumbers.length)}
                    className='font-medium rounded-md text-[#a1abb9] px-2 py-2 hover:text-primary transition-all duration-300 ease-out'
                  >
                    {pageNumbers.length}
                  </button>
                </li>
              </>
            ) : null}
          </>
        )}
        {active !== pageNumbers.length && !searchQuery ? (
          <li className='mx-1'>
            <button
              onClick={() => handleClick(active + 1)}
              className='font-medium rounded-md text-[#a1abb9] px-2 py-2 hover:text-primary transition-all duration-300 ease-out'
              >
              <HiArrowLongRight />
              </button>
              </li>
              ) : null}
              </ul>
              </nav>
              );
              };
              
export default Pagination;

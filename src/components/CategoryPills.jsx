import React from 'react';

const CategoryPills = ({ category, selected, onClick }) => {
  const pillClasses = `cursor-pointer transition-all duration-300 ease-in-out text-xs sm:text-base
    ${ selected ? 'text-primary' : ''}`

  return (
    <span
      className={pillClasses}
      onClick={() => onClick(category)}
    >
      {category}
    </span>
  );
};

export default CategoryPills;

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPrevClick, onNextClick }) => {
  return (
    <div className="text-center mb-2">
      <button className='inline-block bg-[#333] text-white no-underline mx-[5px] my-0 px-2.5 py-[3px] rounded-[5px] hover:bg-[#555] float-left' id="prevPage" onClick={onPrevClick} disabled={currentPage === 1}>
        Previous
      </button>
      <span id="currentPage">Page {currentPage}</span>
      <button className='inline-block bg-[#333] text-white no-underline mx-[5px] my-0 px-2.5 py-[3px] rounded-[5px] hover:bg-[#555] float-right' id="nextPage" onClick={onNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

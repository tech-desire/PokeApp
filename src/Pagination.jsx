import React from "react";
import "./pokemon.css";

const Pagination = ({
  offset,
  currentPage,
  totalPages,
  totalCount,
  LIMIT,
  setOffset,
  search,
}) => {
  if (!search) {
    return (
      <>
        <div className="pagination">
          <button
            className="page-btn"
            disabled={offset === 0}
            onClick={() => setOffset((prev) => Math.max(prev - LIMIT, 0))}
          >
            Prev
          </button>

          <span className="page-info">
            Page {currentPage}/{totalPages}
          </span>

          <button
            className="page-btn"
            disabled={offset + LIMIT >= totalCount}
            onClick={() => setOffset((prev) => prev + LIMIT)}
          >
            Next
          </button>
        </div>
      </>
    );
  }
};

export default Pagination;

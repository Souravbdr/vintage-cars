import './pagination.scss';
function Pagination({ totalPages, handlePageClick, currentPage }) {
    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <div className='btn'>
                    <button
                        key={pageNumber}
                        onClick={() => handlePageClick(pageNumber)}
                        className={pageNumber === currentPage ? 'active' : ''}
                    >
                        {pageNumber}
                    </button>
                </div>
            ))}
        </div>);
}

export default Pagination;
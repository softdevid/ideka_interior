import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center mt-6">
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`mx-1 px-3 py-1 rounded focus:outline-none ${
                        currentPage === number
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                    }`}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;

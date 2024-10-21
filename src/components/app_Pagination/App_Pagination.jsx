import React, { useState, useEffect } from 'react'
// import '../app_Pagination/App_Pagination.css'
import Style from ".//App_Pagination.module.css"
import arrow_left from "../../assets/svg/arrow_up.svg"
import arrow_right from "../../assets/svg/arrow_down2.svg"



const App_Pagination = ({ postsPerPage, totalPosts, paginate, currentPage: propCurrentPage }) => {

  const [currentPage, setCurrentPage] = useState(propCurrentPage || 1);
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  useEffect(() => {
    setCurrentPage(propCurrentPage || 1);
  }, [propCurrentPage]);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle pagination with arrows
  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      paginate(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      paginate(newPage);
    }
  };

  return (

    <div id={Style.App_Pagination_mainDiv}>

      <div id={Style.pagination_Div}>

        {/* Previous Arrow */}
        <div className={Style.arrow_div}>

          <button onClick={handlePrevious} disabled={currentPage === 1} >
            <img src={arrow_left} alt="Previous" />
          </button>
        </div>
        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <div className={Style.page_number_div}>

            <button
              key={number}
              onClick={() => {
                setCurrentPage(number);
                paginate(number);
              }}
              style={{
                backgroundColor: currentPage === number ? "#0E093C" : "transparent",
                color: currentPage === number ? "#FFFFFF" : "#000000", width: "1.6rem", height: "1.7rem", borderRadius: "0.3rem"
                // margin: "0 5px"
              }}
            >
              {number}
            </button>

          </div>
        ))}

        {/* Next Arrow */}
        <div className={Style.arrow_div}>
          <button onClick={handleNext} disabled={currentPage === totalPages} >
            <img src={arrow_right} alt="Next" />
          </button>
        </div>

      </div>

      {/* Display 1 of X */}
      <div className="pagination-info" style={{ color: "#000000" }}>

        Showing {currentPage} of {totalPages} pages
      </div>
    </div>
  )
}




export default App_Pagination

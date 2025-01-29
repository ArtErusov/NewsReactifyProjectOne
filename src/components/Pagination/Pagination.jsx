import styles from "./styles.module.css";

function Pagination({totalPages, currentPage, handleNextPage, handlePreviousPage, handlePageClick}) {
  return (
    <div className={styles.pagination}>

     <button 
        disabled={currentPage === 1} 
        className={styles.button}  
        onClick={handlePreviousPage}>
          {"<"}
      </button>

     <div className={styles.buttons_flex}>
      {[...Array(totalPages)].map((_, index) => {
        return <button 
          disabled={index + 1 === currentPage} 
          className={styles.button}
          onClick={() => handlePageClick(index + 1)} 
          key={index}>
            {index + 1}
        </button>
      })}
      </div>

      <button 
        disabled={currentPage === totalPages} 
        className={styles.button} 
        onClick={handleNextPage}>
          {">"}
      </button>

     </div>
  );
}

export default Pagination;

import styles from "./styles.module.css";

function Pagination({totalPages, currentPage, handleNextPage, handlePreviousPage, handlePageClick}) {
return (
  <div className={styles.pagination}>
    <button 
      className={styles.button} 
      disabled={currentPage === 1}   
      onClick={handlePreviousPage}>
      {"<"}
    </button>
    <div className={styles.buttons_flex}>
      {/* Создаем пустой массив который будет отображать кнопки(страницы) */}
      {[...Array(totalPages)].map((_, index) => {
        return (
          <button 
            className={styles.button}
            disabled={index + 1 === currentPage}    
            onClick={() => handlePageClick(index + 1)} 
            key={index}>
            {index + 1}
          </button>)
        })}
      </div>
    <button 
      className={styles.button} 
      disabled={currentPage === totalPages} 
      onClick={handleNextPage}>
      {">"}
    </button>
   </div>
  );
}
//тест
export default Pagination;

// disabled - делает элемент не активным
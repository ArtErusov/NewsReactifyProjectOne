import { useEffect, useState } from "react";
import { getNews, getCaterories } from "../../api/apiNews";

import styles from "./styles.module.css";
import NewsBanners from "../../components/NewsBanners/NewsBanners";
import NewsList from "../../components/NewsList/NewsList"
import Sceleton from "../../components/Sceleton/Sceleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Сategories/Сategories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../Constants/constants";

function Main() {

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


// ============Pagination =========================================

const [currentPage, setCurrentPage] = useState(1);
const handleNextPage = () => setCurrentPage(currentPage < TOTAL_PAGES ? currentPage + 1 : currentPage);
const handlePreviousPage = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage );
const handlePageClick = (pageNumber) => setCurrentPage(pageNumber)

// ========== Select Category =========================================
const [categories, setCategories] = useState([]);
const [selectedCategories, setSelectedCategories] = useState('All');


const fetchCaterories = async () => {
  try {
    const response = await getCaterories();
    setCategories(["All", ...response.categories])    
  } catch (error) {
    console.log("Не удалось получить Категории новостей (Main):", error);
  }
};

useEffect(() => {  
  fetchCaterories();
}, []);
// ========== Search =========================================
const [keywords, setKeywords] = useState("");
const debouncedKeywords = useDebounce(keywords, 1500)

// ========== Запрос на сервер =========================================

const fetchNews = async () => {
  try {
    setIsLoading(false)
    const response = await getNews({
      page_number: currentPage,
      page_size: PAGE_SIZE,
      category: selectedCategories === "All" ? null : selectedCategories,
      keywords: debouncedKeywords
    });
    setNews(response.news);
    setIsLoading(true)
    } catch (error) {
      console.log("Не удалось получить новости (Main):", error);
    }
  };

useEffect(() => {  
    fetchNews();
    }, [currentPage, selectedCategories, debouncedKeywords]);

// =====================================================================

return (
<>
  <div className={styles.container}>
    {isLoading ?  <NewsBanners item={news} /> :  <Sceleton count = {2}/> }
  </div>
  <div className={styles.divider}></div>

  <div className={styles.container}> 
    <Categories 
      categories={categories} 
      selectedCategories={selectedCategories} 
      setSelectedCategories={setSelectedCategories}
    />
    <Search keywords={keywords} setKeywords={setKeywords} />
    {isLoading ? <NewsList news={news} /> : <Sceleton count = {10}/> }
    <Pagination 
      totalPages={TOTAL_PAGES} 
      currentPage={currentPage}
      handleNextPage={handleNextPage} 
      handlePreviousPage={handlePreviousPage} 
      handlePageClick={handlePageClick}
    />
  </div>
</>
  )
}

export default Main;
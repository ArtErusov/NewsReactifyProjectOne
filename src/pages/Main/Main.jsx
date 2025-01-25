import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";

import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList"
import Sceleton from "../../components/Sceleton/Sceleton";

function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {  
const fetchNews = async () => {
        try {
          setIsLoading(false)
          const response = await getNews();
          console.log(response)
          setNews(response.news);
          setIsLoading(true)
        } catch (error) {
          console.log("Не удалось получить новости (Main):", error);
        }
      };
    fetchNews();
    }, []);

  return (
<>
  <div className={styles.container}>
    <div className={styles.banners}>
      {isLoading ? (
            <>
            {/* Сделать массив, в который передавать новости и в NewsBanner отрисовывать их */}
            <NewsBanner item={news[0]} />
            <NewsBanner item={news[1]} />
             </>
        ) : (
            <Sceleton count = {2}/> 
        )
      }

    </div>
  </div>
  <div className={styles.divider}></div>
  <div className={styles.container}>  
  {isLoading ? <NewsList news={news} /> : <Sceleton count = {10}/> }
  </div>
  
</>
  )
}

export default Main;
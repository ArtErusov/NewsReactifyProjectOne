import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";
import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList"
// 1 - 16:25


function Main() {
  const [news, setNews] = useState([]);
 

useEffect(() => {  
const fetchNews = async () => {
        try {
          const response = await getNews();
          console.log(response)
          setNews(response.news);
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
    {news.length > 0 ? <NewsBanner item={news[1]} /> : null}
    {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
    </div>
    <NewsList news={news} />

  </div>
</>
  )
}

export default Main;
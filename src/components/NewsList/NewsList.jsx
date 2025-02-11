import NewsItem from "./components/NewsItem/NewsItem";
import styles from "./styles.module.css";
import withSceleton from "../../helpers/hocs/wthSceleton";

function NewsList({ news }) {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

const NewsListWithSkeleton = withSceleton(NewsList, 10, "news")

export default NewsListWithSkeleton;

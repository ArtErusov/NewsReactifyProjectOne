import styles from "./styles.module.css";

function Sceleton({ count = 2, type }) {
  return (
    <>
      {type === "banners" ? (
        <ul className={styles.banner}>
          {[...Array(count)].map((_, index) => (
            <li key={index}>
              <div className={styles.banner_img}></div>
              <div className={styles.banner_text_one}></div>
              <div className={styles.banner_text_two}></div>
              <div className={styles.banner_author}></div>
            </li>
          ))}
        </ul>
      ) : type === "news" ? (
        <ul className={styles.news}>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={styles.news_flex}>
              <div className={styles.news_img}></div>
              <div>
                <div className={styles.news_text_one}></div>
                <div className={styles.news_text_two}></div>
                <div className={styles.news_text_tree}></div>
                <div className={styles.news_author}></div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.categories}></div>
      )}
    </>
  );
}

export default Sceleton;

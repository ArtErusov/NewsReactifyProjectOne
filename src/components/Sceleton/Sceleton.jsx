import styles from "./styles.module.css";

function Sceleton({ count = 2 }) {
  return (
    <>
      {count === 2 ? (
        <ul className={styles.banner}>
          {[...Array(count)].map((_, index) => (
            <li key={index}>
              <div className={styles.banner_img}></div>
              <div className={styles.banner_text}></div>
              <div className={styles.banner_text_bottom}></div>
              <div className={styles.banner_author}></div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={styles.item}>
          {[...Array(count)].map((_, index) => (
            <li key={index}>
              <div className={styles.item_img}></div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Sceleton;

import styles from "./styles.module.css";
import { formatTimeAgo } from "../../../../helpers/formatTimeAgo";
import { LengthCheck } from "../../../../helpers/lengthCheck";

function NewsItem({ item }) {

console.log(LengthCheck(item.author))
  return (
    <li className={styles.item}>
      <div className={styles.wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>

      <div className={styles.info}>
        <h3 className={styles.title}>
          {LengthCheck(item.title, 90)}
        </h3>
        <p className={styles.extra}> 
          {formatTimeAgo(item.published)} by {LengthCheck(item.author, 16)}
        </p>
      </div>
    </li>
  );
}

export default NewsItem;

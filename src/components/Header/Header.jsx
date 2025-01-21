import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';

function Header() {
    return (
    <>
      <header className={`${styles.header} ${styles.container}`}>
        <h1 className={styles.title}>News Reacty</h1>
        <p className={styles.date}>{formatDate(new Date)}</p>
      </header>
      <div className={styles.divider}></div>
    </>
    )
  }
  
  export default Header;
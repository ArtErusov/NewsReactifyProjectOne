import styles from './styles.module.css';
import { formatTimeAgo } from '../../../../helpers/formatTimeAgo';
import Image from '../Image/Image';

function BannerItem({item}) {
  return (
    <div className={styles.banner_container} >
    <Image image={item.image}/>
    <h3 className={styles.banner_title} >{item.title}</h3>
    <p className={styles.banner_text}>{formatTimeAgo(item.published)} by {item.author}</p>
  </div>
  )
}

export default BannerItem
import withSceleton from '../../helpers/hocs/wthSceleton';
import BannerItem from './components/BannerItem/BannerItem';
import styles from './styles.module.css';

function NewsBanners({item}) {
  return (
    <div className={styles.banners}>
      <BannerItem item={item[1]} />
      <BannerItem item={item[2]} />
    </div >
  )
}

const NewsBannerWithSkeleton = withSceleton(NewsBanners, 2, "banners")


export default NewsBannerWithSkeleton 
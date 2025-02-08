import styles from './styles.module.css';

function Сategories({selectedCategories, categories, setSelectedCategories}) {
    return (
    <>
    <ul className={styles.categories}>
    {categories.map((item, index) => (
        <li 
          className={ item === selectedCategories ? styles.categories__item__active : styles.categories__item  } 
          onClick={() => setSelectedCategories(item)} 
          key={index}>
          {item}
        </li>
        ))} 
    </ul>
    </>
    )
  }
  
  export default Сategories;
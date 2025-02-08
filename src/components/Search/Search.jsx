import styles from './styles.module.css';

function Search({setKeywords, keywords}) {
  return (
<input 
  className={styles.input} 
  type="text" 
  value={keywords} 
  onChange={(e) => setKeywords(e.target.value)} 
  placeholder="React"
/>
  )
}

export default Search;
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search a album of your choice"
        className={styles.searchInput}
      />
      <button className={styles.searchIconButton}>🔍</button>
    </div>
  );
}

export default SearchBar;

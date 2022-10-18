import React, { useRef } from "react";
import styles from "../styles/search-bar.module.css";

const SearchBar = (props) => {
  const inputRef = useRef();
  const formRef = useRef();

  const onSubmitInputValue = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    formRef.current.reset();
  };

  return (
    <div className={styles.searchBar}>
      <form
        ref={formRef}
        action=""
        className={styles.searchForm}
        onSubmit={onSubmitInputValue}
      >
        <input
          ref={inputRef}
          type="text"
          className={styles.searchInput}
          placeholder="찾고 싶은 향수가 있으신가요?"
          maxLength={30}
          required
        />
        <button className={styles.searchBtn}>
          <img src="/img/searchBar-1.png" alt="search-1-1" />
          <img src="/img/searchBar-2.png" alt="search-1-2" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

import React from "react";
import SearchBar from "./search-bar";
import SearchResults from "./search-results";
import styles from "./fund-explorer.module.css";

export default function FundExplorer(props) {
  return (
    <div className={props.className}>
      <div className={styles.toolbarContainer}>
        <SearchBar className={styles.toolbarSearchInput} />
      </div>
      <SearchResults />
    </div>
  );
}

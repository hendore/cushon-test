import React from "react";
import SearchBar from "@cushon/ui/search-bar";
import SearchResults from "@cushon/ui/search-results";
import styles from "@cushon/ui/fund-explorer.module.css";

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

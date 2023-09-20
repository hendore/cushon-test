import React from "react";
import styles from "./search-results-empty.module.css";

export default function SearchResultsEmpty(props) {
  return (
    <div className={styles.container}>
      <img src="/images/search-illustration.svg" className={styles.image} />
      <h1 className={styles.heading}>Oh no!</h1>
      <p className={styles.snippet}>
        We couldn't find any search results, please adjust your criteria.
      </p>
    </div>
  );
}

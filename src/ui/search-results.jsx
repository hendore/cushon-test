import React from "react";
import { useSelector } from "react-redux";
import { selectSearchResults } from "@cushon/state/queries";
import SearchResultsEmpty from "./search-results-empty";
import SearchResultItem from "./search-result-item";
import styles from "./search-results.module.css";

export default function SearchResults(props) {
  const results = useSelector(selectSearchResults);

  if (results.length == 0) {
    return <SearchResultsEmpty />;
  }

  return (
    <div className={styles.container}>
      {results.map((fund) => (
        <SearchResultItem key={fund.id} fund={fund} />
      ))}
    </div>
  );
}

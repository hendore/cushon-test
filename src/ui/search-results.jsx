import React from "react";
import { useSelector } from "react-redux";
import { selectSearchResults } from "@cushon/state/queries";
import SearchResultsEmpty from "@cushon/ui/search-results-empty";
import SearchResultItem from "@cushon/ui/search-result-item";
import styles from "@cushon/ui/search-results.module.css";

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

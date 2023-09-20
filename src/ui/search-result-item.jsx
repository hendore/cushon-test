import React from "react";
import { useDispatch } from "react-redux";
import { selectFund } from "@cushon/state/actions";
import { riskLevelText } from "@cushon/utilities";
import styles from "./search-result-item.module.css";

export default function SearchResultItem(props) {
  const dispatch = useDispatch();

  function handleClickViewDetails() {
    dispatch(selectFund(props.fund.id));
  }

  return (
    <div className={styles.container}>
      <div>
        <span className={styles.riskLevel}>
          {riskLevelText(props.fund.risk)}
        </span>
        <span className={styles.name}>{props.fund.name}</span>
        <span className={styles.projectedReturns}>
          {props.fund.projectedReturns}% Projected Returns
        </span>
      </div>
      <div className={styles.actionContainer}>
        <button className="button" onClick={handleClickViewDetails}>
          <i className="fas fa-fw fa-info-circle" /> View Fund Details
        </button>
      </div>
    </div>
  );
}

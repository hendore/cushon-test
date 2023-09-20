import React from "react";
import { useSelector } from "react-redux";
import { selectFundById } from "@cushon/state/queries";
import { formatCurrency } from "@cushon/utilities";
import { formatTimestamp } from "@cushon/utilities";
import styles from "./investment-history-item.module.css";

export default function InvestmentHistoryItem(props) {
  const fund = useSelector(selectFundById(props.investment.fundId));

  return (
    <div className={styles.container}>
      <div className={styles.date}>{formatTimestamp(props.investment.ts)}</div>
      <div className={styles.fund}>{fund.name}</div>
      <div className={styles.amount}>
        {formatCurrency(props.investment.amount)}
      </div>
    </div>
  );
}

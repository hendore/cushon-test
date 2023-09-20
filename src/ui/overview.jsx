import React from "react";
import { useSelector } from "react-redux";
import { selectTotalInvested } from "@cushon/state/queries";
import { formatCurrency } from "@cushon/utilities";
import InvestmentHistory from "@cushon/ui/investment-history";
import styles from "@cushon/ui/overview.module.css";

export default function Overview(props) {
  const totalInvested = useSelector(selectTotalInvested);

  return (
    <div className={props.className}>
      <img
        className={styles.logo}
        src="/images/logo.svg"
        width="64"
        height="64"
      />

      <div className={styles.section}>
        <span className={styles.label}>Total Invested</span>
        <span className={styles.investmentTotal}>
          {formatCurrency(totalInvested)}
        </span>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Investment History</span>
        <InvestmentHistory />
      </div>
    </div>
  );
}

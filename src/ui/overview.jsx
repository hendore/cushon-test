import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useSelector } from "react-redux";
import { selectTotalInvested } from "@cushon/state/queries";
import { formatCurrency } from "@cushon/utilities";
import InvestmentHistory from "./investment-history";
import styles from "./overview.module.css";

export default function Overview(props) {
  const totalInvested = useSelector(selectTotalInvested);
  const totalMotionValue = useMotionValue(totalInvested);
  const totalOutput = useTransform(totalMotionValue, (x) => formatCurrency(x));

  React.useEffect(() => {
    animate(totalMotionValue, totalInvested, { duration: 1 });
  }, [totalInvested]);

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
        <motion.span className={styles.investmentTotal}>
          {totalOutput}
        </motion.span>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Investment History</span>
        <InvestmentHistory />
      </div>
    </div>
  );
}

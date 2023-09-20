import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPreloading, selectActiveFundId } from "@cushon/state/queries";
import { preload } from "@cushon/state/actions";
import Loading from "./loading";
import FadeIn from "./fade-in";
import Overview from "./overview";
import FundExplorer from "./fund-explorer";
import FundDetailsModal from "./fund-details-modal";
import styles from "./dashboard.module.css";

export default function Dashboard(props) {
  const dispatch = useDispatch();
  const preloading = useSelector(selectPreloading);
  const activeFundId = useSelector(selectActiveFundId);

  useEffect(function preloadFundsAndInvestments() {
    dispatch(preload());
  }, []);

  if (preloading) {
    return <Loading />;
  }

  return (
    <FadeIn className={styles.container}>
      <Overview className={styles.overviewContainer} />
      <FundExplorer className={styles.explorerContainer} />
      {activeFundId && <FundDetailsModal fundId={activeFundId} />}
    </FadeIn>
  );
}

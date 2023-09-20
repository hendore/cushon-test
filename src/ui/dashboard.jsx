import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPreloading, selectActiveFundId } from "@cushon/state/queries";
import { preload } from "@cushon/state/actions";
import Loading from "@cushon/ui/loading";
import FadeIn from "@cushon/ui/fade-in";
import Overview from "@cushon/ui/overview";
import FundExplorer from "@cushon/ui/fund-explorer";
import FundDetailsModal from "@cushon/ui/fund-details-modal";
import styles from "@cushon/ui/dashboard.module.css";

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

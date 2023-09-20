import React from "react";
import { useSelector } from "react-redux";
import { selectInvestments } from "@cushon/state/queries";
import InvestmentHistoryItem from "./investment-history-item";

export default function InvestmentHistory(props) {
  const investments = useSelector(selectInvestments);

  if (investments.length == 0) {
    return <p>You haven't made any investments yet.</p>;
  }

  return investments.map((investment) => (
    <InvestmentHistoryItem key={investment.id} investment={investment} />
  ));
}

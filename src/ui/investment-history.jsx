import React from "react";
import { useSelector } from "react-redux";
import { selectInvestments } from "@cushon/state/queries";
import InvestmentHistoryItem from "./investment-history-item";

export default function InvestmentHistory(props) {
  const investments = useSelector(selectInvestments);

  return investments.map((investment) => (
    <InvestmentHistoryItem key={investment.id} investment={investment} />
  ));
}

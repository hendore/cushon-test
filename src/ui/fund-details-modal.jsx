import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInvestment, deselectFund } from "@cushon/state/actions";
import { selectFundById } from "@cushon/state/queries";
import InvestmentForm from "@cushon/ui/investment-form";
import Modal from "@cushon/ui/modal";
import confetti from "canvas-confetti";

export default function FundDetailsModal(props) {
  const dispatch = useDispatch();
  const fund = useSelector(selectFundById(props.fundId));

  function handleModalClose() {
    dispatch(deselectFund());
  }

  function handleSubmitInvestmentForm(amount) {
    dispatch(addInvestment({ fundId: fund.id, amount })).then(() => {
      confetti({
        colors: ["#FD2492", "#FF56A3", "#B466AE"],
        gravity: 3,
        startVelocity: 60,
        particleCount: 80,
        spread: 72,
      });
    });
  }

  return (
    <Modal onClose={handleModalClose}>
      <h2>{fund.name}</h2>
      <p>{fund.description}</p>
      <p>
        <b>How much would you like to invest?</b>
      </p>
      <InvestmentForm onSubmit={handleSubmitInvestmentForm} />
    </Modal>
  );
}

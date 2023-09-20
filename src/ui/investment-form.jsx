import React, { useState } from "react";
import styles from "@cushon/ui/investment-form.module.css";

export default function InvestmentForm(props) {
  const [amount, setAmount] = useState("");

  return (
    <div className={styles.container}>
      <input
        type="number"
        placeholder="1000"
        className="text-input"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <button
        className="button"
        disabled={isNaN(amount) || amount <= 0}
        onClick={() => props.onSubmit(amount)}
      >
        Confirm Investment
      </button>
    </div>
  );
}

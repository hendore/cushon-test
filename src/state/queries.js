/**
 * In a bigger application I wouldn't have all of the applications queries/selectors in a
 * single module, instead I would opt to group related functionality (slices) into their
 * own modules but since this is such as a small application it's simple enough to just
 * have a single queries module for the handful that need to exist for the system to work.
 *
 * The same thought process applies to the actions.js module.
 */
import { createSelector } from "@reduxjs/toolkit";

/******************************************************************************************
 * Searching
 ******************************************************************************************/

export function selectFundSearchText(state) {
  return state.searchText;
}

export const selectSearchResults = createSelector(
  selectFundSearchText,
  selectFunds,
  (searchText, funds) => {
    return funds.filter((f) =>
      f.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
);

/******************************************************************************************
 * ISA Funds
 ******************************************************************************************/

export function selectFunds(state) {
  return state.funds;
}

export function selectFundById(fundId) {
  return (state) => {
    return selectFunds(state).find((f) => f.id == fundId);
  };
}

export function selectActiveFundId(state) {
  return state.activeFundId;
}

/******************************************************************************************
 * Customers Investments
 ******************************************************************************************/

export function selectInvestments(state) {
  return state.investments;
}

export function selectTotalInvested(state) {
  const investments = selectInvestments(state);

  return investments.reduce((sum, investment) => (sum += investment.amount), 0);
}

/******************************************************************************************
 * Misc
 ******************************************************************************************/

export function selectPreloading(state) {
  return state.preloading;
}

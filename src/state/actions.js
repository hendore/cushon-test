/**
 * In a bigger application I wouldn't have all of the applications actions/events in a
 * single module, instead I would opt to group related functionality (slices) into their
 * own modules but since this is such as a small application it's simple enough to just
 * have a single actions module for the handful that need to exist for the system to work.
 *
 * The same thought process applies to the queries.js module.
 */
import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import * as requests from "@cushon/requests";

// Dispatched when the users updates the search text input in the fund explorer
export function searchFunds(text) {
  return { type: "searchFunds", payload: { text } };
}

// Dispatched when the users changes the sort order in the fund explorer
export function sortFunds(order) {
  return { type: "sortFunds", payload: { order } };
}

export function selectFund(fundId) {
  return { type: "selectFund", payload: { fundId } };
}

export function deselectFund() {
  return { type: "deselectFund" };
}

// Dispatched when the user confirms a new investment
export const addInvestment = createAsyncThunk("addInvestment", (payload) => {
  return requests.recordInvestment(payload);
});

// Dispatched when the application boots up to reload previous investments
export const preload = createAsyncThunk("preload", () => {
  return Promise.all([
    requests.fetchInvestments(),
    requests.fetchAvailableFunds(),
  ]).then(([investments, funds]) => {
    return { investments, funds };
  });
});

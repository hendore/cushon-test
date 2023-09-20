/**
 * Mocking some fake network requests here, in the real world we wouldn't be using
 * local storage and hardcoded data so please use your imagination here (or feel free to ignore and
 * pretend the client is interacting with a backend up and running).
 */
import { nanoid } from "@reduxjs/toolkit";

/**
 * Returns a promise that when resolved will contain an array of funds
 * that are available to invest in.
 */
export function fetchAvailableFunds() {
  return fetch("/funds.json").then((res) => res.json());
}

/**
 * Returns a promise that when resolved will contain all investments
 * previously made. In the real world this would obviously be a fetch
 * request to ask for this information from the server.
 */
export function fetchInvestments() {
  return simulateRequest(getLocallyStoredInvestments);
}

/**
 * Asks the "server" to create and store a new investment. Returns a
 * promise that when resolved will contain the newly created investment
 * entity returned from the "server".
 */
export function recordInvestment({ fundId, amount }) {
  return simulateRequest(() => {
    const investment = { id: nanoid(), fundId, amount, ts: Date.now() };
    storeInvestment(investment);

    return investment;
  });
}

/**
 * Small utility function for recordInvestment above, simply prepends the
 * given investment to the locally stored investments.
 */
function storeInvestment(investment) {
  const investments = getLocallyStoredInvestments();
  const updatedInvestments = [investment, ...investments];

  localStorage.setItem("investments", JSON.stringify(updatedInvestments));
}

/**
 * Utility function to just pull out any previously stored investments
 * from localstorage.
 */
function getLocallyStoredInvestments() {
  return JSON.parse(localStorage.getItem("investments")) || [];
}

/**
 * Small utility function for above mock api request functions. Returns a
 * promise that will resolve the value returned from `fn` after waiting
 * for `delay` (milliseconds).
 */
function simulateRequest(fn, delay = 350) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      return resolve(fn());
    }, delay);
  });
}

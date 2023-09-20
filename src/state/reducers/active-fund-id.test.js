import { test } from "uvu";
import * as assert from "uvu/assert";
import reducer from "./active-fund-id.js";

test("reducer is a function", () => {
  assert.type(reducer, "function");
});

test("initial state defaults to null", () => {
  assert.equal(reducer(undefined, {}), null);
});

test("active fund id is updated when selecting a fund", () => {
  const action = { type: "selectFund", payload: { fundId: 123 } };

  assert.equal(reducer(null, action), 123);
});

test("active fund id is cleared when deselecting the active fund", () => {
  const action = { type: "deselectFund" };

  assert.equal(reducer(123, action), null);
});

test("active fund id is cleared after adding an investment", () => {
  const action = { type: "addInvestment/fulfilled" };

  assert.equal(reducer(123, action), null);
});

test("active fund id is cleared after failing to add an investment", () => {
  const action = { type: "addInvestment/rejected" };

  assert.equal(reducer(123, action), null);
});

test.run();

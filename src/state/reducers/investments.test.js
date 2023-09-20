import { test } from "uvu";
import * as assert from "uvu/assert";
import reducer from "./investments.js";

test("reducer is a function", () => {
  assert.type(reducer, "function");
});

test("initial state defaults to an empty array", () => {
  assert.equal(reducer(undefined, {}), []);
});

test("newly added investments are pushed to the beginning of the array", () => {
  const state = [{ id: 1, fundId: "test", amount: 100, ts: Date.now() }];
  const investment = { id: 2, fundId: "example", amount: 50, ts: Date.now() };
  const action = { type: "addInvestment/fulfilled", payload: investment };

  assert.equal(reducer(state, action), [investment, ...state]);
});

test.run();

import { test } from "uvu";
import * as assert from "uvu/assert";
import reducer from "./funds.js";

test("reducer is a function", () => {
  assert.type(reducer, "function");
});

test("initial state defaults to an empty array", () => {
  assert.equal(reducer(undefined, {}), []);
});

test("funds are stored once they after preloading", () => {
  const funds = [
    { id: 1, name: "Test fund" },
    { id: 2, name: "Another fund" },
  ];

  const result = reducer([], { type: "preload/fulfilled", payload: { funds } });

  assert.equal(result, funds);
});

test.run();

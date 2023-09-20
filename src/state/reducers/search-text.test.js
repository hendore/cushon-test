import { test } from "uvu";
import * as assert from "uvu/assert";
import reducer from "./search-text.js";

test("reducer is a function", () => {
  assert.type(reducer, "function");
});

test("initial state defaults to an empty string", () => {
  assert.equal(reducer(undefined, {}), "");
});

test("search text value can be modifed", () => {
  const result = reducer("", {
    type: "searchFunds",
    payload: { text: "hello" },
  });

  assert.equal(result, "hello");
});

test.run();

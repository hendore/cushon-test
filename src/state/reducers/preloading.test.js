import { test } from "uvu";
import * as assert from "uvu/assert";
import reducer from "./preloading.js";

test("reducer is a function", () => {
  assert.type(reducer, "function");
});

test("initial state defaults to true", () => {
  assert.equal(reducer(undefined, {}), true);
});

test("value becomes false once preloading has finished", () => {
  const result = reducer("", { type: "preload/fulfilled" });
  assert.equal(result, false);
});

test.run();

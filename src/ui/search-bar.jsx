import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFundSearchText } from "@cushon/state/queries";
import { searchFunds } from "@cushon/state/actions";
import classnames from "classnames";

export default function SearchBar({ className }) {
  const searchText = useSelector(selectFundSearchText);
  const dispatch = useDispatch();

  function handleSearchTextChange(e) {
    dispatch(searchFunds(e.target.value));
  }

  return (
    <input
      type="text"
      placeholder="Search funds"
      value={searchText}
      onChange={handleSearchTextChange}
      className={classnames("text-input", className)}
    />
  );
}

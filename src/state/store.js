import { combineReducers, configureStore } from "@reduxjs/toolkit";
import activeFundId from "./reducers/active-fund-id";
import investments from "./reducers/investments";
import searchText from "./reducers/search-text";
import funds from "./reducers/funds";
import preloading from "./reducers/preloading";

export default configureStore({
  reducer: combineReducers({
    activeFundId,
    investments,
    searchText,
    funds,
    preloading,
  }),
});

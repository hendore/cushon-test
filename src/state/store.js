import { combineReducers, configureStore } from "@reduxjs/toolkit";
import activeFundId from "@cushon/state/reducers/active-fund-id";
import investments from "@cushon/state/reducers/investments";
import searchText from "@cushon/state/reducers/search-text";
import funds from "@cushon/state/reducers/funds";
import preloading from "@cushon/state/reducers/preloading";

export default configureStore({
  reducer: combineReducers({
    activeFundId,
    investments,
    searchText,
    funds,
    preloading,
  }),
});

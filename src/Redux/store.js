// create store here
import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
export const store = legacy_createStore(reducer);

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}

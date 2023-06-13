import { createStore } from "redux";
import { reducer } from "../reduxers";

const store = createStore(reducer);
export default store;
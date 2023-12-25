import { createStore } from "redux";
import notesReducer from "../reducers/notesreducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(notesReducer, composeWithDevTools());
export default store;

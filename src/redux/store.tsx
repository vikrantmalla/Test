import { createStore } from "redux";
// import appReducer from "./Reducer";
// import { BugReducer } from "./BugReducer";
import TodoReducer from "./TodoReducer";

const store = createStore(TodoReducer);
export default store;

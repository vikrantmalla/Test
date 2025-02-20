import React from "react";

// import { bugAdded, bugResolved } from "./actions";
import { todoAdded, todoRemoved } from "./actions";

import store from "../redux/store";

store.dispatch(todoRemoved(1));
// store.dispatch(bugAdded("bug1"));
// store.dispatch(bugResolved(2));

console.log(store.getState());
function Index() {
  return <div></div>;
}

export default Index;

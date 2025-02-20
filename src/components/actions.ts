import * as actions from "./ActionTypes";

export const bugAdded = (description: string) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});

export const bugResolved = (id: number) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});

export const todoAdded = (description: string) => ({
  type: actions.TODO_ADDED,
  payload: {
    description,
  },
});

export const todoRemoved = (id: number) => ({
  type: actions.TODO_DELETED,
  payload: {
    id,
  },
});
// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "BUG!",
//     },

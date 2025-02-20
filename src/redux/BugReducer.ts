import * as actions from "../components/ActionTypes";

let lastId = 0;

interface Bug {
  id: number;
  description: string;
  resolved: boolean;
}

interface BugAddedAction {
  type: typeof actions.BUG_ADDED;
  payload: {
    description: string;
  };
}

interface BugRemovedAction {
  type: typeof actions.BUG_DELETED;
  payload: {
    id: number;
  };
}
interface BugResolvedAction {
  type: typeof actions.BUG_RESOLVED;
  payload: {
    id: number;
  };
}

type Action = BugAddedAction | BugRemovedAction | BugResolvedAction;

export function BugReducer(state: Bug[] = [], action: Action): Bug[] {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_DELETED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}

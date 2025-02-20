import * as actions from "../components/ActionTypes";

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}
let id = 0;

interface TodoAddedAction {
  type: typeof actions.TODO_ADDED;
  payload: {
    description: string;
  };
}
interface TodoRemovedAction {
  type: typeof actions.TODO_DELETED;
  payload: {
    id: number;
  };
}
interface TodoResolved {
  type: typeof actions.TODO_COMPLETED;
  payload: {
    id: number;
  };
}

type Action = TodoAddedAction | TodoRemovedAction | TodoResolved;

export default function TodoReducer(
  state: Todo[] = [],
  action: Action
): Todo[] {
  switch (action.type) {
    case actions.TODO_ADDED: {
      return [
        ...state,
        {
          id: ++id,
          description: action.payload.description,
          completed: false,
        },
      ];
    }
    case actions.TODO_COMPLETED: {
      return state.map((todo) =>
        todo.id !== action.payload.id ? todo : { ...todo, completed: true }
      );
    }
    case actions.TODO_DELETED: {
      return state.filter((todo) => todo.id !== action.payload.id);
    }

    default:
      return state;
  }
}

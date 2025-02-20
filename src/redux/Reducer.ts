interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Filters {
  status: string | number;
  color: string;
}

interface TodoState {
  todos: Todo[];
  filters: Filters;
}

type TodoAction =
  | { type: "todos/todoAdded"; payload: string }
  | { type: "todos/todoToggled"; payload: number }
  | { type: "todos/todoRemoved"; payload: number }
  | { type: "filters/setColors"; payload: string }
  | { type: "filters/setStatus"; payload: string | number };

const initialState: TodoState = {
  todos: [],
  filters: {
    status: "All",
    color: "",
  },
};

export const availableColors: string[] = ["red", "blue", "green"];
function nextTodoId(todos: Todo[]) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function appReducer(
  state = initialState,
  action: TodoAction
): TodoState {
  switch (action.type) {
    case "todos/todoAdded": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    }
    case "todos/todoToggled": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    }
    case "todos/todoRemoved": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case "filters/setColors": {
      return {
        ...state,
        filters: {
          ...state.filters,
          color: action.payload,
        },
      };
    }
    case "filters/setStatus": {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    }

    default:
      return state;
  }
}

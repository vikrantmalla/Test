import { useSelector } from "react-redux";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  filters: {
    status: string | number;
    colors: string[];
  };
}

const selectTodos = (state: TodoState) => state.todos;

function TodoList() {
  const todos = useSelector(selectTodos);

  if (todos.length === 0) {
    return <div>No todos available</div>;
  }

  const renderedListItems = todos.map((todo) => (
    <li key={todo.id}>
      {todo.text} - {todo.completed ? "Completed" : "Pending"}
    </li>
  ));

  return <ul className="todo-list">{renderedListItems}</ul>;
}

export default TodoList;

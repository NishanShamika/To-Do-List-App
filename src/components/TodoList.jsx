import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <ul>
        <li className="my-2 text-sm italic">All Notes</li>
        <TodoItem/>
    </ul>
  );
};

export default TodoList;
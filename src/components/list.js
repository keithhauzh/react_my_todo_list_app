import Item from "./item";

function TodoList({ todos, onTodoDelete, onTodoCheck }) {
  return (
    <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{
        maxWidth: "500px",
      }}
    >
      <ul className="list-group">
        {todos.map((todo) => (
          <Item
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            onTodoDelete={onTodoDelete}
            onTodoCheck={onTodoCheck}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

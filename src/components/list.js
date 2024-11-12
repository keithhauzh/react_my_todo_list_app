import Item from "./item";

function TodoList(task) {
  const { todos } = task;
  return (
    <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{
        maxWidth: "500px",
      }}
    >
    
    <ul className="list-group d-flex">
        {todos.map((text, isCompleted) => (
        <Item {...text} {...isCompleted} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

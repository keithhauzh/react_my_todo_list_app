import AddNewForm from "./components/addnew";
import TodoList from "./components/list";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const stringTodos = localStorage.getItem("todos");
  let todos = JSON.parse(stringTodos);
  if (!todos) {
    todos = [];
  }
  const [list, setList] = useState(todos);

  const checkTodo = (id) => {
    setList((listItem) =>
      // with .map, always return the item
      listItem.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );

    let newData = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    // convert the posts array into string format (JSON string)
    let updateTodos = JSON.stringify(newData);
    // save the updated posts into local storage
    localStorage.setItem("todos", updateTodos);
  };

  return (
    <div className="container">
      <div
        className="card rounded shadow-sm mx-auto my-4"
        style={{
          maxWidth: "500px",
        }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList
            todos={list}
            onTodoCheck={checkTodo}
            onTodoDelete={(id) => {
              // 1. remove the selected post from posts based on the post id
              let filteredTodos = todos.filter((todo) => todo.id !== id);
              // 2. update the data back to the local storage
              let convertedTodos = JSON.stringify(filteredTodos);
              localStorage.setItem("todos", convertedTodos);
              setList(filteredTodos);
            }}
          />
          <AddNewForm
            onNewlabelAdded={(todoLabel) => {
              const todos = [...list];
              todos.push({
                id: nanoid(),
                text: todoLabel,
                isCompleted: false,
              });
              let convertedTodos = JSON.stringify(todos);
              localStorage.setItem("todos", convertedTodos);
              setList(todos);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

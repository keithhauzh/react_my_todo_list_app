import AddNewForm from "./components/addnew";
import TodoList from "./components/list";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [list, setList] = useState([]);

  const checkTodo = (id) => {
    setList((listItem) =>
      listItem.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
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
              const newList = list.filter((s) => s.id !== id);
              setList(newList);
            }}
          />
          <AddNewForm
            onNewlabelAdded={(todoLabel) => {
              const newList = [...list];
              newList.push({
                id: nanoid(),
                text: todoLabel,
                isCompleted: false,
              });
              setList(newList);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

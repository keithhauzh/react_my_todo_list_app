import AddNewForm from "./components/addnew";
import TodoList from "./components/list";

function App() {
  const todos = [
    {
      id: 1,
      text: "Task 1",
      isCompleted: true
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: false
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false
    }
  ];
  
  return (
    <div className="container">
      <div
        className="card rounded shadow-sm mx-auto my-4"
        style={{
          maxWidth: "500px",
        }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Classroom</h3>
          <TodoList todos = {todos}/>
          <AddNewForm />
        </div>
      </div>
      
    </div>
  );
}

export default App;

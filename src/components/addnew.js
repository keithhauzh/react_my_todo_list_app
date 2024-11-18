// Your Code
import { useState } from "react";
function AddNewForm(task) {
  const { onNewlabelAdded } = task;
  const [todoLabel, setTodoLabel] = useState("");
  return (
    <div>
      <form>
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Add new student..."
            name="student_name"
            value={todoLabel}
            required
            onChange={(event) => {
              //update the todoName state
              setTodoLabel(event.target.value);
            }}
          />
          <button
            className="btn btn-primary btn-sm rounded ms-2"
            onClick={(event) => {
              // disable the button submit behavior
              event.preventDefault();
              //check for empty string
              if (todoLabel === "") {
                alert("Please Enter A Todo Label");
              } else {
                onNewlabelAdded(todoLabel);
                setTodoLabel("");
              }
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddNewForm;

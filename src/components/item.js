function Item({ id, text, isCompleted, onTodoDelete, onTodoCheck }) {
  
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {/* Check */}
          {isCompleted ? (
            <button
              className="btn btn-sm btn-success"
              onClick={() => {
                onTodoCheck(id);
                console.log(isCompleted);
              }}
            >
              <i className="bi-check-square"></i>
            </button>
          ) : (
            <button
              className="btn btn-sm"
              onClick={() => {
                onTodoCheck(id);
                console.log(isCompleted);
              }}
            >
              <i className="bi-square"></i>
            </button>
          )}
          <span className="ms-2">{text}</span>
        </div>

        <div>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              const confirmDelete = window.confirm(
                "Are you sure you want to delete this todo?"
              );
              if (confirmDelete) onTodoDelete(id);
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
}

export default Item;

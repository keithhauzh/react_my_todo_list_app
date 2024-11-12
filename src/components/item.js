function Item(task) {
    const {text = "Nothing to do!", isCompleted = "false" } = task;
    return (
        <div>
            <li
            className="list-group-item d-flex justify-content-between align-items-center"
            >
                <div className="d-flex align-items-center">
                    {/* Check */}
                        { isCompleted === true 
                        ? 
                        <button className="btn btn-sm btn-success">
                            <i className="bi bi-check-square"></i>
                        </button> 
                        :
                        <button className="btn btn-sm">
                        <i className="bi bi-square"></i>
                        </button> 
                        }

                    <span className="ms-2">
                        {text}
                    </span>
                </div>
                
                <div style={{margin: 0,}}>
                    <input type="hidden" name="id" />
                    <button className="btn btn-sm btn-danger" type="submit">
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
            </li>
            
        </div>   
    )
  
}

export default Item;
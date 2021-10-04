function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={{display: 'inline', marginLeft: '10px'}}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem
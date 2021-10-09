function TodoItem(props) {
    
    const completedStyle ={
        color: '#757575',
        textDecoration: 'line-through'
    }

    return (
        <div className="todoItem">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
                className="todoItem__input"
            />
            <span style={props.item.completed ? completedStyle : null}>{props.item.text}</span>
        </div>
    )
}

export default TodoItem
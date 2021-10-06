function TodoItem(props) {
    const completedStyle ={
        color: '#757575',
        textDecoration: 'line-through'
    }


    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
                style={{marginRight: '15px', marginLeft: '-30px'}}
            />
            <span style={props.item.completed ? completedStyle : null}>{props.item.text}</span>
        </div>
    )
}

export default TodoItem
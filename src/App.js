import React from "react"
import todosData from "./todosData"

// Components
import TodoItem from "./components/TodoItem"
import Conditional from './components/Conditional'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData,
            isLoadong: true
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                      ...todo, 
                      completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
          <div>
              {this.state.isLoading ?
              <h1>Loading...</h1> :
              <Conditional />}
            <div className="todo-list">
                {todoItems}
            </div>
          </div>

        )    
    }
}

export default App
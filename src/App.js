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
            isLoggedIn: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.logClick = this.logClick.bind(this)
    }

    logClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
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

        const buttonStyle = {
            background: 'black'
        }
        
        const buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
        

        return (
          <div>
              <header>
                  <p id="site-logo">The Las Vegas To Do List</p>
                  <button id="log-btn" onClick={this.logClick} style={this.state.isLoggedIn ? buttonStyle : null}>{buttonText}</button>
              </header>

              {this.state.isLoggedIn ?
              <div className="todo-list">
                  <h1 style={{marginBottom: '25px'}}>Things To Do</h1>
                {todoItems}
            </div>:
            <Conditional />}

          </div>
        )    
    }
}

export default App
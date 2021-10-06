import React from "react"
import todosData from "./todosData"

// Components
import TodoItem from "./components/TodoItem"
import Conditional from './components/Conditional'

// Images
import Vegas from './assets/images/vegas.jpg'
import VegasShadow from './assets/images/vegas-shadow.jpg'

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

        const buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"

        const buttonStyle = {
            background: 'black'
        }

        const backgroundStyle = {
            backgroundImage: `url(${VegasShadow})`,
            backgroundPosition: 'contain',
            height: '100vh'
            // backgroundRepeat: 'no-repeat'
        }

        const whiteTextStyle = {
            color: 'white'
        }

        const blackTextStyle = {
            color: `var(--black)`
        }
        

        return (
          <div style={this.state.isLoggedIn ? null : backgroundStyle}>

            <header>
                <p id="site-logo">The Las Vegas To Do List</p>
                <button id="log-btn" onClick={this.logClick} style={this.state.isLoggedIn ? buttonStyle : null}>{buttonText}</button>
            </header>

            {this.state.isLoggedIn ?
                <div className="todo-list" style={{backgroundImage: `url(${Vegas})`, backgroundPosition: 'center'}}>
                    <h1 style={{marginBottom: '25px', fontFamily: 'Oswald, sans-serif'}}>Things To Do</h1>
                    {todoItems}
                </div>:
            <Conditional />}
            
            <footer>
                <p style={this.state.isLoggedIn ? blackTextStyle : whiteTextStyle}>The Las Vegas To Do List | Made by Connor Ocampo</p>
            </footer>
          </div>
        )    
    }
}

export default App
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

        const buttonStyle = { background: 'black' }

        const backgroundStyle = {
            backgroundImage: `url(${VegasShadow})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            // height: 'calc(100vh - 50px)',
            width: '100%'
        }

        const whiteTextStyle = {
            background: 'black',
            color: 'white'
        }

        const blackTextStyle = {
            background: 'white',
            color: `var(--black)`
        }

        return (
            <div>
                <div style={this.state.isLoggedIn ? null : backgroundStyle}>
                    <header>
                        <p id="site-logo">The Las Vegas <span className="site-logo-break">To Do List</span></p>
                        <button id="log-btn" onClick={this.logClick} style={this.state.isLoggedIn ? buttonStyle : null}>{buttonText}</button>
                    </header>

                    {this.state.isLoggedIn ?
                        <div className="todo-list" style={{backgroundImage: `url(${Vegas})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                            <h1 style={{marginBottom: '25px', fontFamily: 'Oswald,  sans-serif'}}>Things To Do</h1>
                            {todoItems}
                        </div>:
                    <Conditional />}
                </div>
                
                <footer style={this.state.isLoggedIn ? blackTextStyle : whiteTextStyle}>
                    <p>Made by Connor Ocampo</p>
                </footer>
            </div>
        )    
    }
}

export default App
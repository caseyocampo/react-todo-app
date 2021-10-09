import React from "react"
import todosData from "./todosData"

// Components
import TodoItem from "./components/TodoItem"
import LoggedOut from './components/LoggedOut'

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
        const blackTextStyle = { background: 'white', color: `var(--black)` }
        const whiteTextStyle = { background: 'black', color: 'lightgrey' }
        const backgroundStyle = {
            backgroundImage: `url(${VegasShadow})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%'
        }

        return (
            <div>
                <div style={this.state.isLoggedIn ? null : backgroundStyle}>
                    <header>
                        <p className="header__siteLogo">The Las Vegas <span className="block">To Do List</span></p>
                        <button class="header__button" onClick={this.logClick} style={this.state.isLoggedIn ? buttonStyle : null}>{buttonText}</button>
                    </header>

                    {this.state.isLoggedIn ?
                        <main className="todoList" style={{backgroundImage: `url(${Vegas})`}}>
                            <h1 className="todoList__title">Things To Do</h1>
                            {todoItems}
                        </main>:
                    <LoggedOut />}
                </div>
                
                <footer style={this.state.isLoggedIn ? blackTextStyle : whiteTextStyle}>
                    <p>Made by Connor Ocampo</p>
                </footer>
            </div>
        )    
    }
}

export default App
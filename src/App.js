import React from 'react'
import TodoItem from './components/TodoItem'
import fakeData from './fakeData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: fakeData
    }
  }
  render() {
    const TodoArray = this.state.data.map(item => <TodoItem key={item.id} item={item}/>)
    return (
      <div className="todo-list">
        <h1>Front-end Engineer Dream Stack</h1>
        <p style={{marginTop: '10px', marginBottom:'3em'}}>Technologies that I'm most interested in working with!</p>
        {TodoArray}
      </div>
    );
  }
}

export default App;

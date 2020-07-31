import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import axios from 'axios';

class App extends Component {
  state = {
        todos: [],    
  }

  componentDidMount() {
    this.refreshList(); 
  }

  refreshList = () => {
    axios.get('http://127.0.0.1:8000/api/task-list/',)
            .then(res => {
                this.setState({
                    todos: res.data
               })
            })
  }

  deleteTodo = (id) => {

    axios.delete(`http://127.0.0.1:8000/api/task-delete/${id}`)
      .then(res => {
        this.refreshList();
        
    })  
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo refreshList={this.refreshList}/>
      </div>
    );
  }
}
export default App;
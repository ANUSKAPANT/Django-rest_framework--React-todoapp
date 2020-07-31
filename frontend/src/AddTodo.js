import React, {Component} from 'react';
import axios from 'axios';

class AddTodo extends Component {
    
      state = {
        todo: '',
      }


    handleChange = (e) => {
         this.setState({ todo: e.target.value });   
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = {
          title : this.state.todo
        };

        axios.post(`http://127.0.0.1:8000/api/task-create/`,  title )
          .then(res => {
            console.log(res.data); 
            this.props.refreshList(); 
            this.setState({
              todo : '',
            })    
          }) 
        
    }
    render() {
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Add New Todo..</label>
                    <input type="text" onChange={this.handleChange} value={this.state.todo}/>
                </form>

            </div>
        )
    }
}

export default AddTodo;
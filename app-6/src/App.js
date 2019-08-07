import React, { Component } from "react";
import Todo from './todo'
import './App.css'

class App extends Component {

      constructor(){
          super()
          this.state = {
            todoArr: [],
            input:''

          }

      }
 
      newInput = (event) =>{

        this.setState({

          input: event.target.value

        })

      }

      addArr = ()=> {

        this.setState({

          todoArr: [...this.state.todoArr, this.state.input],
          input:''
        })
      }

  render() {
    console.log(this.todoArr)
    console.log(this.input)
    let todoArr =this.state.todoArr.map((todo, i) =>{
return <Todo key={i} task={todo} />


    })
    
    return (
      <div>
        <input placeholder="New Task" onChange={this.newInput}/>
        <button onClick={this.addArr}>Add</button>
       

      {todoArr}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import './App.css'
import NewTask from "./newtask";
import List from './list'

class App extends Component {

      constructor(){
          super()
          this.state = {
            todoArr: [],
            
          }

      }
 

      addArr = (task)=> {

        this.setState({

          todoArr: [...this.state.todoArr, task],
          
        })
      }

  render() {
    
    return (

      <div>

      <h1>My to-do list</h1>
      <NewTask add={this.addArr}/>
      <List task={this.state.todoArr} />
        
       

      
      </div>
    )
  }
}

export default App;

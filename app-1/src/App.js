import React, { Component } from "react";
import './App.css'

class App extends Component {

    constructor(){

        super()
        this.state = {
          text: ''

        }
    }

    updateText = (event) =>{

      this.setState({
        text: event.target.value
  
      })
    }  

  render() {
    return(

      <div>
        <input onChange={this.updateText} />
        <h1>{this.state.text}</h1>

      </div>
      )
    }

  }

export default App;

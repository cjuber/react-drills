import React, { Component } from "react";

export default class NewTask extends Component{

    constructor(){
        super()
          this.state = {

            input:''
          }

    }
    newInput = (event) =>{

        this.setState({

          input: event.target.value

        })

      }
      newAddArr = () =>{
this.props.add(this.state.input)
        this.setState({

            input: ''
        })
        
      }

      render(){
          
            return(

                <div>

            <input value={this.state.input} placeholder="New Task" onChange={this.newInput}/>
            <button onClick={this.newAddArr}>Add</button>
                </div>
            )

      }
}
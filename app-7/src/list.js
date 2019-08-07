import React, { Component } from "react";
import Todo from './todo'

export default class List extends Component{

    render(){
        
        let todoArr = this.props.task.map((todo, i) =>{
            return <Todo key={i} task={todo} />
        })
        
        return(

            <div>
                {todoArr}

            </div>
        )
    }
    
}
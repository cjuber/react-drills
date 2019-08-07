import React, {Component} from 'react'

class Login extends Component {

    constructor(){

        super()
    
          this.state = {
            username:'',
            password: ''
    
          }
        
      }
      usernameChange= (name) =>{

       this.setState({username: name.target.value})
    }
      
      passwordChange= (pass) =>{

        this.setState({password: pass.target.value})
      }
      login = () =>{

        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
      }

    render() {
        
        return(
          
          <div>
            
            <label>Username: </label>
            <input onChange={this.usernameChange}/>
            <label>Password: </label>
            <input onChange={this.passwordChange}/>
            <button onClick={this.login}>Login</button>
    
    
          </div>
        )
    
      }

}

export default Login;
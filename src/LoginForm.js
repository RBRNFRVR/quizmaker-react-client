import React, { Component } from 'react'

class LoginForm extends Component{
    handleClick = (event) =>{
        console.log('working')
    }
    
    render(){ 
    return( 
        <form>
            <label for ="username">Username:</label><br/>
            <input type ="text" id="username" name="username"/><br/>
            <label for ="password" >Password:</label><br/>
            <input type="password" id="passowrd" name="password"/><br/>
            <button onClick={this.handleClick} type="submit">Log In</button>
        </form>
    )
    }
}

export default LoginForm
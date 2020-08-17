import React, { Component } from 'react'
import styles from './mystyle.module.css'

class LoginForm extends Component{
    handleClick = (event) =>{
        event.preventDefault()
        console.log('working')
    }
    
    render(){ 
    return( 
        <div>
            <div className={styles.PageTitle}>
            <h1>Login</h1>
            </div>
            <form>
                <label>Username:</label><br/>
                <input type ="text" id="username" name="username"/><br/>
                <label>Password:</label><br/>
                <input type="password" id="password" name="password"/><br/>
                <button onClick={this.handleClick} type="submit">Log In</button>
            </form>
        </div>
    )
    }
}

export default LoginForm
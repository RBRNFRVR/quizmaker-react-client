import React, { Component } from 'react'
import styles from './mystyle.module.css'
import { Redirect } from 'react-router-dom';

class LoginForm extends Component{

    state = {
        usersArray: "",
        unType: "",
        pwType: "",
        loginAlert: false,
        redirect: false,
        loggedInUser: ""
    }

    handleClick = (e) =>{
        e.preventDefault()
        let user = this.state.unType
        let foundUser = this.state.usersArray.filter(obj => obj.username === user)[0]
        if (foundUser && foundUser.password === this.state.pwType){
            this.setState({ loggedInUser: foundUser })
            this.setState({ redirect: true })
            this.props.setLoggedInUser(foundUser)
        } else {
             this.setState({ loginAlert: true }) 
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(data => this.setState({usersArray: data}) )
    }

    unType = (e) => {
        this.setState({unType: e.target.value})
    }
    pwType = (e) => {
        this.setState({pwType: e.target.value})
    }

    registerUser = () => {
        console.log("register user")
    }
    
    render(){ 
    return( 
        <div>
            <div className={styles.PageTitle}>
            <h1>Login</h1>
            </div>
            <form>
                <label>Username:</label><br/>
                <input onChange={this.unType} value={this.state.unType} type ="text" id="username" name="username"/><br/>
                <label>Password:</label><br/>
                <input onChange={this.pwType} value={this.state.pwType} type="password" id="password" name="password"/><br/>
                {!this.state.loginAlert ? null : <p>Incorrect username or password</p>}
                <button onClick={this.handleClick} type="submit">Log In</button>
                <div>
                <button className={styles.signUp} onClick={this.registerUser} type="submit">Sign Up</button>

                </div>
            </form>
            {this.state.redirect ? <Redirect to='/profile'/> : null}
        </div>
    )
    }
}

export default LoginForm
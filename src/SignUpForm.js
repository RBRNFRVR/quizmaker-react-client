import React, { Component } from 'react'
import styles from './mystyle.module.css'
import { Redirect } from 'react-router-dom';

class LoginForm extends Component{

    state = {
        // usersArray: "",
        unType: "",
        pwType: "",
        loginAlert: false,
        redirect: false,
        loggedInUser: ""
    }



    unType = (e) => {
        this.setState({unType: e.target.value})
    }
    pwType = (e) => {
        this.setState({pwType: e.target.value})
    }

    registerUser = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "content-type":"application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                username: this.state.unType,
                password: this.state.pwType
            })
        })
        .then(resp => resp.json())
        .then(data => { 
            let user = {id: data.id, username: data.username}
            this.setState({loggedInUser: user})
            this.props.setLoggedInUser(this.state.loggedInUser)
            this.setState({ redirect: true })
        })
    }
    
    render(){ 
    return( 
        <div>
            <div className={styles.PageTitle}>
            </div>
            <form onSubmit={this.registerUser} className={styles.loginformstyle}>
                 <h1>Register New User</h1>
                <label className={styles.lables}>Username</label><br/>
                <input onChange={this.unType} value={this.state.unType} type ="text" id="username" name="username" placeholder="e.g.RBRNFRVR"/><br/>
                <br/>
                <label className={styles.lables}>Password</label><br/>
                <input onChange={this.pwType} value={this.state.pwType} type="password" id="password" name="password" placeholder="e.g.Pass12356$"/><br/>
                <br/>
                <button type="submit" className={styles.createAccount}>Create Account</button>
            </form>
            
            {this.state.redirect ? <Redirect to='/profile'/> : null}
        </div>
    )
    }
}

export default LoginForm
import React, { Component } from 'react'
import styles from './mystyle.module.css'
import { Redirect, Link } from 'react-router-dom';

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

    registerUser = (e) => {
        e.preventDefault()
        console.log("register user")
    }
    
    render(){ 
    return( 
        <div>
            <div className={styles.PageTitle}>
            </div>
            <form className={styles.loginformstyle}>
                 <h1>Login</h1>
                <label className={styles.lables}>Username</label><br/>
                <input onChange={this.unType} value={this.state.unType} type ="text" id="username" name="username" placeholder="e.g.RBRNFRVR"/><br/>
                <br/>
                <label className={styles.lables}>Password</label><br/>
                <input onChange={this.pwType} value={this.state.pwType} type="password" id="password" name="password" placeholder="e.g.Pass12356$"/><br/>
                {!this.state.loginAlert ? null : <p>Incorrect username or password</p>}
                <br/>
                <button onClick={this.handleClick} type="submit" className={styles.loginbutton}>Log In</button>
                <Link to='/register' className={styles.registerbutton}>Sign Up</Link>
                
            </form>
            
            {this.state.redirect ? <Redirect to='/profile'/> : null}
        </div>
    )
    }
}

export default LoginForm

{/* <Link to='/sign-up' className={styles.registerbutton} onClick={this.registerUser} type="submit">Sign Up</Link> */}

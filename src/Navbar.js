import React, { Component } from 'react'
import LoginForm from './LoginForm'

class Navbar extends Component {
    render(){
        return(
            <h1>NavBar Here!!</h1>,
            <button>Log In</button>,
            <LoginForm />

        )
    }

}
export default Navbar
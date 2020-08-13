import React, { Component } from 'react'
import LoginForm from './LoginForm'

class Navbar extends Component {
    handleClick = (event) => {
        console.log('Loading Profile...')
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick} type="button">Profile</button>
                <h1>NavBar Here!!</h1>
                <LoginForm />
            </div>
        )
    }

}
export default Navbar
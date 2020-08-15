import React, { Component } from 'react'

class Profile extends Component{

    state = {
        info: "",
        quizNames: ""
    }

    componentDidMount(){
        let newUrl = `http://localhost:3000/users/1`
    
        fetch(newUrl)
        .then(resp => resp.json())
        .then(data => this.setState({info:data}))
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState.info !== this.state.info){
            let quizArray = this.state.info.quizzes.map(obj => obj.name)
            let newArray = [...new Set(quizArray)]
            this.setState({quizNames: newArray})
        } 
    }

    render(){
        return(
            <div>
                <h1>My Profile</h1>
                <h2>Username: {this.state.info.username}</h2>
                <p>My Quizzes:</p>
                    <ul>{(this.state.quizNames === "" ? null : this.state.quizNames.map(obj => <li>{obj}</li>))}</ul> 
            </div>
        )
    }
}
export default Profile

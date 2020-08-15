import React, { Component } from 'react'
import QuizQuestions from './QuizQuestions'

class Profile extends Component{

    state = {
        info: "",
        quizNames: "",
        quizArray: "",
        filteredQuestions :"",
        quizName: ""
    }

    componentDidMount(){
        let newUrl = `http://localhost:3000/users/1`
    
        fetch(newUrl)
        .then(resp => resp.json())
        .then(data => {this.setState({info:data}) 
        
            fetch("http://localhost:3000/quizzes")
            .then(resp => resp.json())
            .then(data => this.setState({quizArray: data}) )
        }) 
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState.info !== this.state.info){
            let quizArray = this.state.info.quizzes.map(obj => obj.name)
            let newArray = [...new Set(quizArray)]
            this.setState({quizNames: newArray})
        } 
    }

    clickedQuiz = (name) => {
        this.setState({quizName: name})
        let array = this.state.quizArray
        let filteredArray = array.filter(obj => obj.name === name)
        let questions = filteredArray.map(obj => obj.question)
        this.setState({ filteredQuestions : questions })
    }

    render(){
        return(
            <div>
                <h1>My Profile</h1>
                <h2>Username: {this.state.info.username}</h2>
                <p>My Quizzes:</p>
                    <ul>{(this.state.quizNames === "" ? null : this.state.quizNames.map(obj => <li onClick={() => this.clickedQuiz(obj)}>{obj}</li>))}</ul> 
                <div>
                    <h3>Quiz Rendered:</h3>
                    { (this.state.filteredQuestions === "" ? null : this.state.filteredQuestions.map(obj => <QuizQuestions obj={obj}/>) ) }
                </div>    
            </div>
        )
    }
}
export default Profile

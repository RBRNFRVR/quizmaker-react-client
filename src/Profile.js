import React, { Component } from 'react'
import QuizQuestions from './QuizQuestions'
import styles from './mystyle.module.css'

class Profile extends Component{

    state = {
        info: "",
        quizNames: "",
        quizArray: "",
        filteredQuestions :"",
        quizName: "",
        quizClicked: false,
        hideButton: true
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
        if (prevState.info.quizzes !== this.state.info.quizzes){
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
        this.setState({ filteredQuestions : questions, quizClicked: true, hideButton: false })
    }

    deleteQuiz = () => {
        let quizArray = this.state.quizArray
        let allNamedQ = quizArray.filter(obj => obj.name === this.state.quizName)

        allNamedQ.forEach(quiz => {
            fetch(`http://localhost:3000/quizzes/${quiz.id}`, {
                method: "DELETE",
                headers: {
                    "content-type":"application/json",
                    Accept: "application/json"
                }
            })
            .then(resp => resp.text())
            .then(data => {
                let newUrl = `http://localhost:3000/users/1`
    
                fetch(newUrl)
                .then(resp => resp.json())
                .then(data => this.setState({info:data}))

                this.setState({quizClicked: false})
                this.setState({filteredQuestions: ""})
                this.setState({quizName: ""})
             }) 

        })
    }
    

    render(){
        let counter = 0
        return(
            <div>
                <h1>My Profile</h1>
                <h2>Username: {this.state.info.username}</h2>
                <p>My Quizzes:</p>
                    <ul>{(this.state.quizNames === "" ? null : this.state.quizNames.map(obj => <li onClick={() => this.clickedQuiz(obj)}>{obj}</li>))}</ul> 
                {/* <div className={styles.QuizmakerQuestionsDisplay}> */}
                <div>
                    { (!this.state.quizClicked ? <h4>Select a quiz from "My Quizzes" to view more details</h4> : <div> <h3>{this.state.quizName}</h3><button>Delete Quiz</button></div>)}  
                    { (this.state.filteredQuestions === "" ? null : this.state.filteredQuestions.map(obj =>  {
                    counter += 1
                    return <QuizQuestions count={counter} obj={obj}/>;
                    }
                    ) ) }
                </div>    
            </div>
        )
    }
}
export default Profile

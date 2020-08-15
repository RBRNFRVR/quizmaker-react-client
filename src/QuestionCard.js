import React from 'react'
import styles from './mystyle.module.css'

class QuestionCard extends React.Component{

    state = {
        quizName: this.props.quizName,
        buttonClicked: false,
        questionID: "",
        quizID: ""
    }
    
    addToQuiz = () => {
        this.setState({buttonClicked: true})
        let questionObj = this.props.obj
        
        fetch("http://localhost:3000/questions", {
            method: "POST",
            headers: {
                "content-type":"application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                category: questionObj.category,
                difficulty: questionObj.difficulty,
                question: questionObj.question,
                correct_answer: questionObj.correct_answer,
                incorrect_answers: questionObj.incorrect_answers.join(", ")
            })
        })
        .then(resp => resp.json())
        .then(data => { 
            this.setState({questionID: data.id})
            fetch("http://localhost:3000/quizzes", {
                method: "POST",
                headers: {
                    "content-type":"application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name: this.state.quizName,
                    question_id: data.id,
                    user_id: 1
                })
            })
            .then(resp => resp.json())
            .then(data => this.setState({quizID: data.id }, () => console.log("this.state.quizID", this.state.quizID)))
        }) 
    }

    removeFromQuiz =() => {
        this.setState({buttonClicked: false})
            fetch(`http://localhost:3000/quizzes/${this.state.quizID}`, {
                method: "DELETE",
                headers: {
                  "content-type":"application/json",
                  Accept: "application/json"
                }
            })
        this.setState({quizID:""})
        this.deleteQuestion()
    }

    deleteQuestion =() => {

        fetch(`http://localhost:3000/questions/${this.state.questionID}`, {
            method: "DELETE",
            headers: {
                "content-type":"application/json",
                Accept: "application/json"
            }
        })
        this.setState({questionID:""})
    }        
        
    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    render(){
        let level = this.props.obj.difficulty
        
        return(
            <div className={styles.QuestionCard}>
                <h3>Question</h3>
                <p>Category: {this.props.obj.category}</p>
                <p>Difficulty: {this.capitalize(level)}</p>
                <p>Question: {this.props.obj.question}</p>
                <p>Correct Answer: {this.props.obj.correct_answer}</p>
                <p>Incorrect Answers: {this.props.obj.incorrect_answers.join(", ")}</p>
                {this.state.buttonClicked ? <button onClick={this.removeFromQuiz}>Remove</button>:<button onClick={this.addToQuiz}>Add to Quiz</button>}
            </div>
        )
    }
}

export default QuestionCard
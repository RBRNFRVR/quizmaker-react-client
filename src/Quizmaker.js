import React, { Component } from 'react'
import QuestionCard from './QuestionCard'




class Quizmaker extends Component {

    // renderCards = () => {
    //     this.props.questions.map(obj => <QuestionCard question={obj.question} correctAnswer={obj.correct_answer} incorrectAnswers={obj.incorrect_answers}/>)
    // }

    render(){
        console.log("in maker", this.props.questions)
        return(
            <div>
                <h1>Quizmaker Container</h1>
                
                {this.props.questions.map(obj => <QuestionCard question={obj.question} correctAnswer={obj.correct_answer} incorrectAnswers={obj.incorrect_answers}/>)}
                
            </div>
        )
    }
}
export default Quizmaker
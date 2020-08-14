import React from 'react'

class QuestionCard extends React.Component{
    render(){
        console.log("in qC", this.props.question)
        return(
            <div>
                <h3>Question</h3>
                <p>Question: {this.props.question}</p>
                <p>Correct Answer:{this.props.correctAnswer}</p>
                <p>Incorrect Answers: {this.props.incorrectAnswers}</p>
            </div>
        )
    }
}

export default QuestionCard
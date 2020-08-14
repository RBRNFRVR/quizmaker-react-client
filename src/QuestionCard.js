import React from 'react'

class QuestionCard extends React.Component{

    addToQuiz = () => {
        console.log("added to quiz!")
        fetch()
    }

    render(){
        
        return(
            <div>
                <h3>Question</h3>
                <p>Category: {this.props.category}</p>
                <p>Difficulty: {this.props.difficulty}</p>
                <p>Question: {this.props.question}</p>
                <p>Correct Answer: {this.props.correctAnswer}</p>
                <p>Incorrect Answers: {this.props.incorrectAnswers.join(", ")}</p>
                <button onClick={this.addToQuiz}>Add to Quiz</button>
            </div>
        )
    }
}

export default QuestionCard
import React from 'react'
import styles from './mystyle.module.css'

class QuizQuestions extends React.Component {

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    render(){
        let level = this.props.obj.difficulty
        
        return(
            <div className={styles.Questions}>
                <h3>Question #{this.props.count}</h3>
                <p>Category: {this.props.obj.category}</p>
                <p>Difficulty: {this.capitalize(level)}</p>
                <p>Question: {this.props.obj.question}</p>
                <p>Correct Answer: {this.props.obj.correct_answer}</p>
                <p>Incorrect Answers: {this.props.obj.incorrect_answers}</p>
                {/* {this.state.buttonClicked ? <button onClick={this.removeFromQuiz}>Remove</button>:<button onClick={this.addToQuiz}>Add to Quiz</button>} */}
            </div>
        )
    }
}

export default QuizQuestions
import React from 'react'
import styles from './mystyle.module.css'

class QuizQuestions extends React.Component {

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    decodeText = (string) => {
        let entities = {
            '&#039;': "'",
            '&quot;': '"',
            '&rsquo;': "'"
        }
        let stg1 = string.replace(/&#?\w+;/, match => entities[match]).replace(/&#?\w+;/, match => entities[match])
        let stg2 = stg1.replace(/&#?\w+;/, match => entities[match]).replace(/&#?\w+;/, match => entities[match])
        let stg3 = stg2.replace(/&#?\w+;/, match => entities[match]).replace(/&#?\w+;/, match => entities[match])
        let stg4 = stg3.replace(/&#?\w+;/, match => entities[match]).replace(/&#?\w+;/, match => entities[match])
        let stg5 = stg4.replace(/&#?\w+;/, match => entities[match]).replace(/&#?\w+;/, match => entities[match])
        let stg6 = stg5.replace(/&#?\w+;/, match => entities[match]).replace(/&#?\w+;/, match => entities[match])
        let stg7 = stg6.replace(/&#?\w+;/, match => entities[match]).replace(/&#?\w+;/, match => entities[match])
        let stg8 = stg7.replace(/&#?\w+;/, match => entities[match]).replace(/&#?\w+;/, match => entities[match])
        let stg9 = stg8.replace(/&#?\w+;/, match => entities[match]).replace(/&#?\w+;/, match => entities[match])
        let stg10 = stg9.replace(/&#?\w+;/, match => entities[match]).replace(/&#?\w+;/, match => entities[match])
        return stg10  
    }
    render(){
        let level = this.props.obj.difficulty
        
        return(
            <div className={styles.Questions}>
                <h3>Question #{this.props.count}</h3>
                <p><b>Category: </b>{this.props.obj.category}</p>
                <p><b>Difficulty:</b> {this.capitalize(level)}</p>
                <p><b>Question: </b>{this.decodeText(this.props.obj.question)}</p>
                <p><b>Correct Answer:</b> {this.props.obj.correct_answer}</p>
                <p><b>Incorrect Answers:</b> {this.props.obj.incorrect_answers}</p>
            </div>
        )
    }
}

export default QuizQuestions
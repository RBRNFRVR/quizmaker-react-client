import React, { Component } from 'react'
import Quiz from './Quiz'
import styles from './mystyle.module.css'

class QuizContainer extends Component {
render(){
    return(
        <div>
            <div className={styles.PageTitle}>
            <h1>Choose a Quiz!!</h1>
            </div>
            <Quiz />
        </div>
    )
}
}

export default QuizContainer
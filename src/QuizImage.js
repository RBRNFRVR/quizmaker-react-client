import React, { Component } from 'react'
import styles from './mystyle.module.css'
import image from '/Users/rbrnfrvr/Mod-4-Project-Redos/Front-End/quizmaker-react-client/src/03dbf00e-9264-414f-9565-1b6d4de12aba_200x200 (1).png'


class QuizImage extends Component{
    render(){
        return(
            <div className={styles.Image}>
                <img src={image}></img>
            </div>
        )
    }
}

export default QuizImage
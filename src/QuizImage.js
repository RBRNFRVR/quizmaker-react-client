import React, { Component } from 'react'
import styles from './mystyle.module.css'
import image from './03dbf00e-9264-414f-9565-1b6d4de12aba_200x200 (1).png'


class QuizImage extends Component{
    render(){
        return(
            <div className={styles.Image}>
                <img src={image} alt="Quiz maker"></img>
            </div>
        )
    }
}

export default QuizImage
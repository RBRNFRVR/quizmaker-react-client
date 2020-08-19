import React, { Component } from 'react'
import QuestionCard from './QuestionCard'
import Dropdown from './Dropdown'
import styles from './mystyle.module.css'
import {withRouter} from 'react-router-dom';


class Quizmaker extends Component {

    state = {
        nextClicked: false,
        quizName: ""
    }

    createNewQuiz =(e) =>{
        e.preventDefault()
        if (this.state.quizName.length < 3){
            alert("Please enter a name for your quiz. Name must be at least 3 characters in length.")
        }else{
            this.setState({ nextClicked: true })
        }
    }

    nameChange = (e) => {
        this.setState({quizName: e.target.value})
    }

    redirect = () => {
        console.log("redirect!")
        return this.props.history.push('/profile')
    }
  
    render(){
        let counter = 0
        
        return(
            <div className={styles.QuizmakerContainer}>
                { this.state.nextClicked ? <h3 className={styles.Quizname}>{this.state.quizName}</h3> :
                <form onSubmit={this.createNewQuiz} className={styles.quizForm}>
                    <label className={styles.qmLables}>Quiz Name</label>
                    <input onChange={this.nameChange} type="text" placeholder="new quiz name..." value={this.state.quizName} className={styles.quizmakertitle}></input>
                    <input type="submit" value="Next" className={styles.loginbutton}></input>
                </form>
                }
                
                { ( this.state.nextClicked ? <Dropdown getQuestions={this.props.getQuestions}/> : null )}
                <div className={styles.QuizmakerQuestionsDisplay}>
            { (this.props.questions === "" ? null : this.props.questions.map(obj => {
            counter += 1
            return <QuestionCard loggedInUser={this.props.loggedInUser} count={counter} quizName={this.state.quizName} obj={obj}/>
                })
            ) }
                </div>
                {this.props.questions === "" ? null :<button onClick={this.redirect} className={styles.doneBtn}>SUBMIT QUIZ</button>}
            </div>
        )
    }
}
export default withRouter(Quizmaker)
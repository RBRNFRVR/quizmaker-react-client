import React, { Component } from 'react'
import QuestionCard from './QuestionCard'
import Dropdown from './Dropdown'




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
        console.log("change", e.target.value)
        this.setState({quizName: e.target.value})
    }
  
    render(){
        
        return(
            <div>
                <h1>Quizmaker Container</h1>
                { this.state.nextClicked ? <h3>{this.state.quizName}</h3> :
                <form onSubmit={this.createNewQuiz}>
                    <label>Quiz Name:</label>
                    <input onChange={this.nameChange} type="text" placeholder="new quiz name..." value={this.state.quizName}></input>
                    <input type="submit" value="Next"></input>
                </form>
                }
                { ( this.state.nextClicked ? <Dropdown getQuestions={this.props.getQuestions}/> : null )}
                { (this.props.questions === "" ? null : this.props.questions.map(obj => <QuestionCard quizName={this.state.quizName} obj={obj}/>) ) }
                
            </div>
        )
    }
}
export default Quizmaker
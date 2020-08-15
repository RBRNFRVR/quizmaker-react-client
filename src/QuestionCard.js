import React from 'react'

class QuestionCard extends React.Component{

    state = {
        quizName: this.props.quizName
    }
    
    addToQuiz = () => {
        let questionObj = this.props.obj
        
        fetch("http://localhost:3000/questions", {
            method: "POST",
            headers: {
                "content-type":"application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                category: questionObj.category,
                difficulty: questionObj.difficulty,
                question: questionObj.question,
                correct_answer: questionObj.correct_answer,
                incorrect_answers: questionObj.incorrect_answers
            })
        })
        .then(resp => resp.json())
        .then(data => {
            fetch("http://localhost:3000/quizzes", {
                method: "POST",
                headers: {
                    "content-type":"application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name: this.state.quizName,
                    question_id: data.id,
                    user_id: 1
                })
            })
            .then(resp => resp.json())
            .then(data => console.log("new quiz", data))
        })
        
    }
    
    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    render(){
        let level = this.props.obj.difficulty
        
        return(
            <div>
                <h3>Question</h3>
                <p>Category: {this.props.obj.category}</p>
                <p>Difficulty: {this.capitalize(level)}</p>
                <p>Question: {this.props.obj.question}</p>
                <p>Correct Answer: {this.props.obj.correct_answer}</p>
                <p>Incorrect Answers: {this.props.obj.incorrect_answers.join(", ")}</p>
                <button onClick={this.addToQuiz}>Add to Quiz</button>
            </div>
        )
    }
}

export default QuestionCard
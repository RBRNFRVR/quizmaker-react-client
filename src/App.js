import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import QuizContainer from './QuizContainer'
import QuizMaker from './Quizmaker'

class App extends Component{
  state={
    Quiz: []
  }
//   componentDidMount(){
//  fetch()
//   }

  render(){
    return(
      <div>
        <h1 className="quiz-title">QuizMaker Project</h1>
        <Navbar />
        <QuizContainer />
        <QuizMaker />
      </div>
      
    )
  }
}

export default App;

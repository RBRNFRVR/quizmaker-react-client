import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import QuizContainer from './QuizContainer'
import QuizMaker from './Quizmaker'

class App extends Component{
  render(){
    return(
      <h1 className="quiz-title">QuizMaker Project</h1>,
      <div>
        <Navbar />,
        <QuizContainer />.
        <QuizMaker />
      </div>
      
    )
  }
}

export default App;

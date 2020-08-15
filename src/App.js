import React, { Component } from 'react';
import styles from './mystyle.module.css'
import Navbar from './Navbar'
import QuizContainer from './QuizContainer'
import QuizMaker from './Quizmaker'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Profile from './Profile';
import LoginForm from './LoginForm';


class App extends Component{
  state={
    questions: ""
  }


  getQuestions = (num, diff) =>{
    let newUrl = `https://opentdb.com/api.php?amount=10&category=${num}&difficulty=${diff}`
    
    fetch(newUrl)
    .then(resp => resp.json())
    .then(data => this.setState({questions: data.results}))
  }

  qmClicked = () => {
    this.setState({questions: "" })
  }

 


  render(){
    return(
      <Router>
      <div>
        <h1 className={styles.Appheader}>QuizMaker Project</h1>
        <Navbar qmClicked={this.qmClicked}/>
        <Route exact path ='/quiztaker' component={QuizContainer} />
        <Route exact path = '/quizmaker' render={() => <QuizMaker questions={this.state.questions} getQuestions={this.getQuestions}/>} />
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/loginform' component={LoginForm}/>
      </div>
      </Router>
    )
  }
}

export default App;

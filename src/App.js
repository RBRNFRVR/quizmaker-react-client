import React, { Component } from 'react';
import styles from './mystyle.module.css'
import Navbar from './Navbar'
import QuizContainer from './QuizContainer'
import QuizMaker from './Quizmaker'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Profile from './Profile';
import LoginForm from './LoginForm';

const url = "https://opentdb.com/api.php?amount=10"

class App extends Component{
  state={
    questions: []
  }

  componentDidMount(){
    fetch(url)
    .then(rep => rep.json())
    .then(data => this.setState({ questions: data["results"]}))
}

  render(){
    return(
      <Router>
      <div>
        <h1 className={styles.Appheader}>QuizMaker Project</h1>
        <Navbar />
        <Route exact path ='/quiztaker' component ={QuizContainer} />
        <Route exact path = '/quizmaker' render={() => <QuizMaker questions={this.state.questions}/>} />
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/loginform' component={LoginForm}/>
      </div>
      </Router>
    )
  }
}

export default App;

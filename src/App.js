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
    Quiz: []
  }
//   componentDidMount(){
//  fetch()
//   }

  render(){
    return(
      <Router>
      <div>
        <h1 className={styles.Appheader}>QuizMaker Project</h1>
        <Navbar />
        <Route exact path ='/quiztaker' component ={QuizContainer} />
        <Route exact path = '/quizmaker' component={QuizMaker} />
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/loginform' component={LoginForm}/>
      </div>
      </Router>
    )
  }
}

export default App;

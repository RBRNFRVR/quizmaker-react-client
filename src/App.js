import React, { Component } from 'react';
import styles from './mystyle.module.css'
import Navbar from './Navbar'
import QuizContainer from './QuizContainer'
import QuizMaker from './Quizmaker'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Profile from './Profile';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import QuizImage from './QuizImage'


class App extends Component{
  state={
    questions: "",
    loggedInUser: "",
    loggedInUsername: "",
    userLogged: false
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

  setLoggedInUser = (userObj) => {
    this.setState({loggedInUser: userObj})
    this.setState({userLogged: userObj.username})
    this.setState({loggedInUsername: userObj.username})
  }

  logOut = () => {
    console.log("logged out")
    this.setState({userLogged: false}, () => console.log("user logged state", this.state.userLogged))
  }

  render(){
    return(
        <Router>
        <div className={styles.QuizApp}>
          <QuizImage />
        <Navbar qmClicked={this.qmClicked}/>
        <Navbar logOut={this.logOut} userLogged={this.state.userLogged} loggedInUser={this.state.loggedInUser} loggedInUsername={this.state.loggedInUsername} qmClicked={this.qmClicked}/>
        <Route exact path="/"><Redirect to="/login" /></Route>
        <Route exact path ='/quiztaker' component={QuizContainer} />
        <Route exact path = '/quizmaker' render={() => <QuizMaker loggedInUser={this.state.loggedInUser} questions={this.state.questions} getQuestions={this.getQuestions}/>} />
        <Route exact path='/profile' render={() => <Profile loggedInUser={this.state.loggedInUser}/>}/>
        <Route exact path='/login' render={() => <LoginForm setLoggedInUser={this.setLoggedInUser}/> } />
        <Route exact path='/register' render={() => <SignUpForm setLoggedInUser={this.setLoggedInUser}/> } />
        </div>
        </Router>
      
    )
  }
}

export default App;

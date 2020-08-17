import React, { Component } from 'react'
import styles from  './mystyle.module.css'
import { Link, Switch, withRouter} from "react-router-dom";

class Navbar extends Component {
    state={
        hover:false,
        loggedInUser: this.props.loggedInUser,
        loggedInUsername: this.props.loggedInUsername,
        userLogged: false
    }
    handleClick = (event) => {
        console.log('Loading Profile...')
    }
    handleonMouseEnter =(event) => {
       this.state.hover === true? this.setState({hover:false}):this.setState({hover:true})
       
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.userLogged !== this.props.userLogged){
            this.setState({userLogged: !this.state.userLogged})
        }
    }

    render(){
        console.log("in nav", this.props.userLogged)
        return(
            <div className={styles.NavbarFlex}>
                { this.state.userLogged ?
                    <>
                    <div className={styles.buttonlink}>
                    <Link to='/profile' onMouseEnter={this.handleonMouseEnter}>Profile</Link>
                    </div>
                    <div className={styles.buttonlink}>
                    <Link to='/quizmaker' onClick={this.props.qmClicked} onMouseEnter={this.handleonMouseEnter}>Quizmaker</Link>
                    </div>
                    <div className={styles.buttonlink}>
                    <Link to='/quiztaker'onMouseEnter={this.handleonMouseEnter}>Quiztaker</Link>
                    </div>
                    <div className={styles.buttonlink}>
                    <Link to='/login' onClick={this.props.logOut} onMouseEnter={this.handleonMouseEnter}>Log Out</Link>
                    </div>
                    </>
                :
                null 
                }
                     {/* <div className={styles.buttonlink}>
                { !this.state.userLogged ? <Link to='/login' onMouseEnter={this.handleonMouseEnter}>Login</Link> : <Link to='/login' onClick={this.props.logOut} onMouseEnter={this.handleonMouseEnter}>Log Out</Link> }
                </div> */}
            </div>
        )
    }

}
export default Navbar
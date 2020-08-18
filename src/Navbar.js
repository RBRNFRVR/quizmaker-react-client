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
        return(
            <div className={styles.NavbarFlex}>
                { this.state.userLogged ?
                    <>
                    <div className={styles.leftthree}>
                        <div className={styles.buttonlink}>
                        <Link to='/profile' onMouseEnter={this.handleonMouseEnter} className={styles.linkstyle}>Profile</Link>
                        </div>
                        <div className={styles.buttonlink}>
                        <Link to='/quizmaker' onClick={this.props.qmClicked} onMouseEnter={this.handleonMouseEnter} className={styles.linkstyle}>Quizmaker</Link>
                        </div>
                        <div className={styles.buttonlink}>
                        <Link to='/quiztaker' onMouseEnter={this.handleonMouseEnter} className={styles.linkstyle}>Quiztaker</Link>
                        </div>
                    </div>
                    <div className={styles.buttonlink}>
                    <Link to='/login' onClick={this.props.logOut} className={styles.loginlinkstyle} onMouseEnter={this.handleonMouseEnter}>Log Out</Link>
                    </div>
                    </>
                :
                null 
                }
                     
            </div>
        )
    }

}
export default Navbar
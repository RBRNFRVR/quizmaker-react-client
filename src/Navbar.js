import React, { Component } from 'react'
import styles from  './mystyle.module.css'
import { Link, Switch, withRouter} from "react-router-dom";

class Navbar extends Component {
    state={
        hover:false
    }
    handleClick = (event) => {
        console.log('Loading Profile...')
    }
    handleonMouseEnter =(event) => {
       this.state.hover === true? this.setState({hover:false}):this.setState({hover:true})

    }

    render(){
        return(
            <div className={styles.NavbarFlex}>
                <div className={styles.leftthree}>
                <div className={styles.buttonlink}>
                <Link to='/profile' onMouseEnter={this.handleonMouseEnter} className={styles.linkstyle}>Profile</Link>
                </div>
                <div className={styles.buttonlink}>
                <Link to='/quizmaker' onClick={this.props.qmClicked} onMouseEnter={this.handleonMouseEnter} className={styles.linkstyle}>Quizmaker</Link>
                </div>
                <div className={styles.buttonlink}>
                <Link to='/quiztaker'onMouseEnter={this.handleonMouseEnter} className={styles.linkstyle}>Quiztaker</Link>
                </div>
                </div>
                <div className={styles.buttonlink}>
                <Link to='/loginform'onMouseEnter={this.handleonMouseEnter} className={styles.loginlinkstyle}>Login</Link>
                </div>
            </div>
        )
    }

}
export default Navbar
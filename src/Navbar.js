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
                <Link to='/login'onMouseEnter={this.handleonMouseEnter}>Login</Link>
                </div>
            </div>
        )
    }

}
export default Navbar
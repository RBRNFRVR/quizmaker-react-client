import React, { Component } from 'react'
import styles from  './mystyle.module.css'
import { Link, Switch} from "react-router-dom";

class Navbar extends Component {
    handleClick = (event) => {
        console.log('Loading Profile...')
    }
    render(){
        return(
            <div className={styles.NavbarFlex}>
                
                <Link to='/profile'>Profile</Link>
                <Link to='/quizmaker'>Quizmaker</Link>
                <Link to='/quiztaker'>Quiztaker</Link>
                <Link to='/loginform'>Login</Link>
            </div>
        )
    }

}
export default Navbar
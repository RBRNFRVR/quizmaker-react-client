import React from 'react'

function LoginForm(){
    return(
        <form>
            <label for ="username">Username:</label><br/>
            <input type ="text" id="username" name="username"/><br/>
            <label for ="password" >Password:</label><br/>
            <input type="password" id="passowrd" name="password"/><br/>
            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginForm
import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return(
            <div className="loginForm">
                <form className="grid-item">
                <h2>Login Here</h2>
                <label>Username: </label>
                <input type="text" />
                <br></br>
                <br></br>
                <label>Password: </label>
                <input type="password" />
                <br></br>
                <br></br>
                <input type="submit" value="Login" className="button" />
                </form>
            </div>
        )
    }
};

export default LoginForm;
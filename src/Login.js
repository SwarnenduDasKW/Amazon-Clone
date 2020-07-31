import React from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom";
import {auth} from "./Firebase";

function Login() {
    // This will be used for redirection. Listen to user login
    const history = useHistory();

    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");

    const login = event => {
        event.preventDefault(); //this stops the refresh!

        //do the login logic here
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                //logged in redirect to homepage
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };

    const register = event => {
        event.preventDefault(); //this stops the refresh!

        //do the register logic here
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //created a user and logged in, redirect to homepage
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
                alt=""
                />
            </Link>
            <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>Email</h5>
                <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                <button type="submit" className="login__signIn" onClick={login}>Sign In</button>               
            </form>
            <p>
                <small>
                By signing-in you agree to Amazon-Clone's Conditions
                of Use and Sale. Please see our privacy notice, our
                our cookie policy and our interest based Ads notice.
                </small>
            </p>
            <button className="login__registerButton" onClick={register}>Create your Amazon-Clone Account</button>
        </div>
    </div>
    );
}

export default Login

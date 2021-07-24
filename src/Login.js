import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    //firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfull creation of new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In or Sign-Up</h1>
        <h4>Real email not required!!</h4>
        <h4>use something like name5489@gmail.com</h4>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={register} className="login__registerButton">
            Sign Up
          </button>

          <h5 className="divider">
            <span>Or</span>
          </h5>

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Not-Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <h4>This page is used for both signing in and creating new account</h4>
        <p>After filling the email and password click on one of the option</p>
      </div>
    </div>
  );
}

export default Login;

import React, { Component, useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { signInWithGoogle } from "../firebase";

function SignIn(props) {
  const auth = useContext(UserContext);

  if (auth.user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signin-form">
      <h1>Sign In/ Sign Up</h1>
      <button className="btn btn-basic" onClick={signInWithGoogle}>
        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" />
        Sign in with Google
      </button>
      <div style={{ textAlign: "center", fontSize: 13 }}>OR</div>
      <button className="btn btn-basic" onClick={signInWithGoogle}>
        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" />
        Sign up with Google
      </button>
    </div>
  );
}

export default SignIn;

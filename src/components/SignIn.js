import React, { Component } from "react";
import { signInWithGoogle } from "../firebase";
class SignIn extends Component {
  render() {
    return (
      <div className="signin-form">
        <h1>Sign In/Sign Up</h1>
        <button className="btn btn-basic" onClick={signInWithGoogle}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
            alt="pic"
          />
          Sign In with Goggle
        </button>

        <div style={{ textAlign: "center", fontSize: 13 }}>OR</div>

        <button className="btn btn-basic" onClick={signInWithGoogle}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
            alt="pic"
          />
          Sign Up with Google
        </button>
      </div>
    );
  }
}

export default SignIn;

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../../config/fire";
import "./SignUp.css";
import Images from "../images";
import Navbar from "../Navbar/Navbar";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
    return <Redirect to="/Dashboard" />;
  }
  return (
    <div>
      <Navbar />
      <div className="loginForm">
        <img src={Images.login_logo} alt="logo-login" className="logo-login" />
        <h1>Sign up!</h1>
        <form onSubmit={handleSubmit} className="loginFormDet">
          <input type="text" name="displayName" placeholder="Full name" />
          <input type="email" name="email" placeholder="Email" />
          {/* <label for="password">Password</label> */}
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

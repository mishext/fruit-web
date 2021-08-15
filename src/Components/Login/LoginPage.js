import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";
import firebaseConfig from "../../config/fire";
import "./Login.css";
import Images from "../images";
import Navbar from "../Navbar/Navbar";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/Dashboard" />;
  }
  return (
    <div>
      <Navbar />
      <div className="loginForm">
        <img src={Images.login_logo} alt="logo-login" className="logo-login" />
        <form className="loginFormDet" onSubmit={handleSubmit}>
          {/* <label for="email">Email</label> */}
          <input type="email" name="email" placeholder="Email" />
          {/* <label for="password">Password</label> */}
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from "../images/logo.png";
import cart from "../images/cart-icon.png";
import tabIcon from "../images/tab-icon.svg";
import firebaseConfig from "../../config/fire";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="Navbar">
      <div className="leftSide">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="middleSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/Home">Home</Link>
          <Link>Sweets</Link>
          <Link href="#">Contact</Link>
          <Link href="#" className="aboutus">
            About Us
          </Link>
          {/* <div className="rightSide links"> */}
          <Link href="#" className="cart-btn">
            <img src={cart} alt="cart-icon" class="cart-icon" />
            CART
          </Link>
          <button
            className="signOut"
            onClick={() => console.log(firebaseConfig.auth().signOut())}
          >
            Sign out
          </button>
          {/* <Link className="header-btn" to="/SignUp">
            Sign up
          </Link> */}
          {/* <a className="header-btn"></a> */}
          {/* <Link className="header-btn" to="/login">
            Login
          </Link> */}

          {/* </div> */}
        </div>
        <i href="#" onClick={() => setShowLinks(!showLinks)} className="tab">
          <img src={tabIcon} className="tab-icon" alt="tab-icon" />
        </i>
      </div>
    </div>
  );
}

export default Navbar;

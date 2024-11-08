import React, { useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom';

export default function Navbar(props) {
  const navigate = useNavigate();



  const toggleMode = (event) => {
    event.preventDefault();

    console.log("hello");
  }

  const handleLogin = () => {
    navigate('./login');
  }

  const handleRegister = () => {
    navigate('./register');
  }

  const handleLogout = () => {
    props.setIsLoggedIn(false);
    navigate('./login');
  }



  return (
    <>
    <div className="top-navbar">
    <p>WELCOME TO OUR SHOP</p>
    <div className="icons">
      {!props.isLoggedIn ?
      <>
      <button class="btn btn-outline-success" onClick={handleLogin}>Login</button>
      <button class="btn btn-outline-success" onClick={handleRegister}>Register</button>
      </>
      :
      <>
      <img src='./images/profile.png' height="40px"></img>
      <button class="btn btn-outline-success" onClick={handleLogout}>Logout</button>
      </>}
    </div>
  </div>

  <nav className="navbar navbar-expand-lg" id="navbar">
    <div className="container-fluid">
      <Link className="navbar-brand" to="index.html" id="logo"><span id="span1">New</span>MUSIC <span
          id="span1">C</span>ORNER</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span><img src="./images/menu.png" alt="" width="30px"/></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="./home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./home">Product</Link>
          </li>
          <li className="nav-item dropdown">

          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./contact">Contact</Link>
          </li>
        </ul>
        {/* <form class="d-flex" id="search">
          <button  class="btn btn-outline-success" id="theme-toggle" onClick={(e) => props.toggleMode(e)}>Dark mode</button>
        </form> */}
        {props.mode === 'light' ?
                    <img src='./images/toDark.png' style={{ height: "30px" }} alt="themeToggler"  onClick={(e) => props.toggleMode(e)}/>
                    :
                    <img src='./images/toLight.png' style={{ height: "30px", filter: "invert(1)" }} alt="themeToggler"  onClick={(e) => props.toggleMode(e)}/>
                }
      </div>
    </div>
  </nav>
  </>
  )
}

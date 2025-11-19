 import React, { useState } from 'react'
 import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../assets/logo.jpeg"
import card from "../../assets/card.png"

const Navbar = () => {
    const[menu,SetMenu]=useState("home")
  return (
    <div className='navbar'>

      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Shopify</p>
      </div>

      {/* Menu */}
      <ul className='nav-menu'>
        <li onClick={()=>{SetMenu("home")}}>Home
{menu==="home"?<hr/>:<></>}

        </li>
        <li onClick={()=>{SetMenu("mens")}}> <Link style={{textDecoration:"none",color:"#626262"}} to="/mens">Man</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("womens")}}> <Link style={{textDecoration:"none",color:"#626262"}} to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu("kids")}}> <Link style={{textDecoration:"none",color:"#626262"}} to="/kids">Kids </Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>

      {/* Login + Cart */}
      <div className="nav-login-card">
        <Link style={{textDecoration:"none",color:"#626262"}} to="/login">  <button>Login</button></Link>
        <Link style={{textDecoration:"none",color:"#626262"}} to ="card">   <img src={card} alt="" height="40px" /> </Link>
         
        <div className="nav-card-count">0</div>
      </div>

    </div>
  );
}

export default Navbar;

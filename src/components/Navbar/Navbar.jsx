 
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo_new4 from '../../assets/logo_new4.png'; 
import {Link} from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
     
       <div className="gpt3__navbar">
    <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
        <img src={logo_new4} alt="logo_new4" />
      </div>
      <div className="gpt3__navbar-links_container">  
          <Link to="/">
          <button>
            Home
          </button>
          </Link>
           
        </div>
       </div>
       <div className="gpt3__navbar-sign">
         
       <div className="app__navbar-login">
       <Link to="/login">
          <button>
            Login
          </button>
       </Link>
         
         </div>
         <Link to="/signup">
                <button>
                Sign up
                </button>
              </Link>
          
      </div>
      
    </div>
  )
}

export default Navbar
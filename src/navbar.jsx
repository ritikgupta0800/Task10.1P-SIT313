import React from 'react';
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <ul>    
          <li><a>Dev@Deakin</a></li>
        </ul>
      <div className="search-box">
          <input type="text" name="search" id="Search" placeholder="Search" />
        </div>
        <ul>
          <div className="Button">
          <li><a href="#">Post</a></li>
          <li><a href="#">Login</a></li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;

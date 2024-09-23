import './App.css'
import React from 'react';
import logo from './assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li className='home'>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservation</li>
            </ul>
            <img className='logo' src={logo}   alt=''/>
            <ul className="second_ul">
                <li>Pages</li>
                <li>Shop</li>
                <li>Contact</li>
                <li><CiSearch className='search' /></li>
                <li><IoBagHandleOutline className='search' /></li>
            </ul>
        </div>
    );
  }
  
  export default Navbar;
  
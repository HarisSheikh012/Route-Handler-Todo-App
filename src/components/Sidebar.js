import React from 'react';
import "./Sidebar.css";


function Sidebar() {
  return (
    <>
    <div className='header'></div>
    <input type="checkbox" id='opensidebarmenu' />
    <label for="opensidebarmenu" className='sidebaricontoggle'>
    <div className='spinner top'></div>
    <div className='spinner middle'></div>
    <div className='spinner bottom'></div>
    </label>
    <div id='sidebarmenu'>
    <ul className='menu'>
        <li><a href="Home">Home</a></li>
        <li><a href="Gallery">Gallery</a></li>
        <li><a href="About">About</a></li>
        <li><a href="History">History</a></li>
        <li><a href="Portfolio">Portfolio</a></li>
        <li><a href="Clients">Clients</a></li>
        <li><a href="Contact">Contact</a></li>
    </ul>
    </div>
    </>
  )
}

export default Sidebar;
import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
        <section id="header">
            <h1 id='head'><span id='title'>AD</span>Shop</h1>
            <nav>
                <ul id="navbar">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">AboutUs</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </section>
    </>
  );
};

export default Navbar;

import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <h1>AD Shop</h1>
        <h4>Contact</h4>
        <p><strong>Address:</strong> 123 BKK, Street 345, Phnom Penh</p>
        <p><strong>Phone:</strong> +855 12345678 / +855 9876543 </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-telegram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="about.html">About Us</a>
        <a href="delivery.html">Delivery Information</a>
        <a href="policy.html">Privacy Policy</a>
        <a href="t&c.html">Terms & Conditions</a>
        <a href="contact.html">Contact Us</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="cart.html">View Cart</a>
        <a href="wishlist.html">My Wishlist</a>
        <a href="track.html">Track My Order</a>
        <a href="help.html">Help</a>
      </div>

      <div className="col">
        <h4>Service</h4>
        <a href="fdelivery.html">fast delivery</a>
        <a href="support.html">support 24/7</a>
        <a href="refund.html">free refund</a>
        <a href="maintenance.html">maintenance</a>
        <a href="web.html">create website</a>
      </div>

      <div className="copyright">
        <p>&#169; 2023, AD - Best of the Best</p>
      </div>
    </footer>
  );
};

export default Footer;

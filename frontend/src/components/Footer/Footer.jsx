import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Welcome to FoodDel – your go-to destination for delicious meals delivered fast and fresh.
      Whether you're craving a spicy curry, a cheesy pizza, or a healthy salad, we’ve got it all!
      Explore our menu and place your order in just a few clicks.</p>
      <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
      </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
                    
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94-761-159-174</li>
                    <li>wkosala2001@gmail.com</li>
                </ul>
            </div>
              
        </div>
      <hr />
                <p className="footer-copyright">Copyright 2024 @ Tomato.com -All Right Reserved.</p>
    
    </div>
    
  )
 
}

export default Footer

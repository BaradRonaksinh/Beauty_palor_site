import React from 'react'
import '../css/Footer.css'
import { FaSquareXTwitter ,FaMeta, FaLinkedin,FaYoutube  } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className='footer'>

      <div className='fullSet'>
        <div className='set-1'>
            <div className='ch'>
                <a href="">About</a>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">Our Story</a>
                <a href="">Blogs</a>
            </div>
            <div className='ch'>
                <a href="">Help</a>
                <a href="">Shipping & Reaturns</a>
                <a href="">Track Order</a>
                <a href="">FAQs</a>
            </div>
            <div className='ch'>
                <a href="">Contact</a>
                <a href="">Phone:98989898</a>
                <a href="">Email:ronakb@gmail.com</a>
            </div>
        </div>
        <div className='set-2'>
            <h1>Receive new promotions</h1>
            <p>Lorem ipsum dolor sit.</p>
            <div className='eml'>
            <input type="email"  placeholder='Input your email' />
            <button>Subscribe</button>
            </div>
            <div className='social'>
                <a href=""><FaSquareXTwitter /></a>
                <a href=""><FaMeta /></a>
                <a href=""><FaLinkedin /></a>
                <a href=""><FaYoutube /></a>
            </div>
            <div>
                <a href="">&copy; 2024 Ronak,</a>
                <a href="">Privacy</a>
                <a href="">Terms</a>
                <a href="">Sitemap</a>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer

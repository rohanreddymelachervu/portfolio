import React from 'react'
import './footer.css'
import {SlSocialInstagram} from 'react-icons/sl'
const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/rohan._.reddy/" target="_blank" rel="noreferrer"><SlSocialInstagram /></a>
      </div>
    </footer>
  )
}

export default Footer

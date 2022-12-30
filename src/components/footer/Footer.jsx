import React from 'react'
import './footer.css'
import {SlSocialInstagram} from 'react-icons/sl'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
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
        <a href="https://www.linkedin.com/in/rohan-reddy-melachervu-326b74219/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/rohanreddymelachervu" target="_blank"><AiOutlineGithub /></a>
        <a href="https://leetcode.com/bruhan_reddy" target="_blank"><SiLeetcode /></a>
      </div>
    </footer>
  )
}

export default Footer

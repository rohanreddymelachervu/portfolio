import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/rohan-reddy-melachervu-326b74219/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/rohanreddymelachervu" target="_blank"><AiOutlineGithub /></a>
        <a href="https://leetcode.com/bruhan_reddy" target="_blank"><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials

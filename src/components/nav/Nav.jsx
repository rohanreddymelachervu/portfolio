import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDots} from 'react-icons/bi'
import {useState} from 'react'
const Nav = () => {
  const [activeNow, setActiveNow] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNow('#home')} className={activeNow === '#' ? 'active' :  ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNow('#about')} className={activeNow==='#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNow('#experience')} className={activeNow==='#experience' ? 'active' : ''}><FiBookOpen /></a>
      <a href="#contact" onClick={() => setActiveNow('#contact')} className={activeNow==='#contact' ? 'active' : ''}><BiMessageDots /></a> 

    </nav>
  )
}

export default Nav
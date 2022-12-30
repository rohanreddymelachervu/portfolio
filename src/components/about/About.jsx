import React from 'react'
import './about.css'
import me from '../../assets/me-about.jpg'
import {RiAwardLine} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {BiFolderOpen} from 'react-icons/bi'
const About = () => {
  return (
    <section id="about">
     
      <div className="container about__container">
        <div className="about__me">
          <img src={me} alt="About me" className="image" />
        </div>
        <div className="about__content">
        <center>
            <h5>Get to know</h5>
            <h2 style={{color : "#4db5ff"}}>About me</h2>
        </center>
          <div className="about__cards">
            <article className='about_card'>
              <RiAwardLine className="about_icon"/>
              <h4>Experience</h4>
              <small>9 months work experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className="about_icon"/>
              <h4>Clients</h4>
              <small>4 Clients</small>
            </article>

            <article className='about_card'>
              <BiFolderOpen className="about_icon"/>
              <h4>Projects</h4>
              <small>10+ completed Projects</small>
            </article>

          </div>
          <center>
            <p>
              Worked in multiple projects as an intern with multiple clients. I believe in using technology as a tool to add value to society and businesses. 
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </center>
        </div>
      </div>
    </section>
  )
}

export default About


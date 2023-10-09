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
              <small>3 years work experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className="about_icon"/>
              <h4>Clients</h4>
              <small>4 Clients</small>
            </article>

            <article className='about_card'>
              <BiFolderOpen className="about_icon"/>
              <h4>Projects</h4>
              <small>4 completed Projects</small>
            </article>

          </div>
          <center>
            <p>
              I've had the privilege of collaborating on diverse projects with a range of clients, delivering innovative software solutions. My core belief is that technology is not just a tool; it's a means to empower and add value to both society and businesses.
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </center>
        </div>
      </div>
    </section>
  )
}

export default About


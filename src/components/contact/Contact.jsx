import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rohan.reddy.melachervu@gmail.com</h5>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a href="https://web.whatsapp.com/send?phone=+919845951056" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact

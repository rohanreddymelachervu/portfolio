import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Fact from './components/fact/Fact'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
const App = () => {
  useEffect(() => {
    Aos.init({duration: 1500, once:true});
  }, []);
  return (
    <div>
      <Header />
      <div data-aos="fade-right">
        <Fact />
        <About />
      </div>
      <Nav />
      <div data-aos="fade-left">
        <Experience />
      </div>
      <div data-aos="flip-up">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App

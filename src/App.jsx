import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Fact from './components/fact/Fact'
const App = () => {
  return (
    <div>
      <Header />
      <Fact />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

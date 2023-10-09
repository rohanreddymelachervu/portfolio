import React, {useState} from 'react'
import './fact.css'
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'
const Fact = () => {
  const words = [
    {id:0, value:"Electric guitar"},
    {id:1, value:"Love listening to metal, especially death metal"},
    {id:2, value:"Gymming and lifting heavy"},
    {id:3, value:"Play Lawn Tennis, Table Tennis, Football, Basketball"},
    {id:4, value:"Speedcuber"},
    {id:5, value:"Binging shows, especially sitcoms and thriller/horror"}
  ]
  const [current, setCurrent] = useState(0)
  const length = words.length
  const nextSlide = () => {
    setCurrent(current === length-1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length-1 : current-1)
  }
  return (
    <section id="fact">
      <h2>My Hobbies</h2>
      <center>
        {words.map((word, index) => {
          return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            <h3>{index === current && word.value}</h3>
          </div>
          )
        })}
        <div className="arrows">
          <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} size={'3em'}/>
          <FaArrowCircleRight className="right-arrow" onClick={nextSlide} size={'3em'} />
        </div>
      </center>
    </section>
  )
}
export default Fact

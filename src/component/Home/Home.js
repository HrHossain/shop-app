import { Carousel } from 'react-bootstrap'
import React from 'react'
import { Container } from 'react-bootstrap'
import pht1 from "./Photo/IMG20190302121329.jpg"
import pht2 from "./Photo/IMG20190302121429.jpg"
import pht3 from "./Photo/IMG20190302122029.jpg"
import "./Home.css"
import About from '../About/About'
import Service from '../Service/Service'
import Blog from '../Blog/Blog'
import Team from "../Team/Team"

const Home = () => {
  return (
      <>
    <Container>
        <Carousel fade variant='white'>
            <Carousel.Item>
               <div className='slider'>
                   <img src={pht1} alt="hridoy pic"/>
               </div>
               <Carousel.Caption>
                   <div className='sliderText'>
                   <h1>Headings are heavy</h1>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo molestiae non, pariatur illo hic delectus ipsa cum aliquid natus.</p>
                   </div>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <div className='slider'>
                   <img src={pht2} alt="hridoy pic"/>
               </div>
               <Carousel.Caption>
                   <div className='sliderText'>
                   <h1>Top class freeHand</h1>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo molestiae non, pariatur illo hic delectus ipsa cum aliquid natus.</p>
                   </div>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <div className='slider'>
                   <img src={pht3} alt="hridoy pic"/>
               </div>
               <Carousel.Caption>
                   <div className='sliderText'>
                   <h1>Just mind blowing</h1>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo molestiae non, pariatur illo hic delectus ipsa cum aliquid natus.</p>
                   </div>
               </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Container>
    <About></About>
    <Service></Service>
    <Blog></Blog>
    <Team></Team>
    </>
  )
}

export default Home
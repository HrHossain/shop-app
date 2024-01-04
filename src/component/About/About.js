import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import abtImg from "./AboutImg/about.jpg"
import "./About.css"


const About = () => {
  return (
   <section className='about-page'>
       <Container>
           <Row>
               <Col md={6}>
                   <div className='about-img'>
                   <img src={abtImg} alt="about image"/>
                   </div>
               </Col>
               <Col md={6}>
                   <div className='about-text'>
                       <h1>About us</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus commodi ratione corrupti corporis dolore architecto repellendus aperiam nobis deleniti molestias, tempore expedita sapiente accusantium aliquam mollitia quo, odit aspernatur! Eius tenetur voluptas quas quis enim nam aliquid saepe sit.</p>
                       <Button className='btn btn-info'>More information</Button>
                   </div>
               </Col>
           </Row>
       </Container>

   </section>
  )
}

export default About
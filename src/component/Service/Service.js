
import React from 'react'
import { Card, Col, Container, Row ,Button } from 'react-bootstrap'
import icn1 from "./serviceIcon/customer-service.png"
import icn2 from "./serviceIcon/customer.png"
import icn3 from "./serviceIcon/support.png"
import "./Service.css"
import AnimatedText from 'react-animated-text-content';

const Service = () => {
  return (
    <div className='service'>
   <Container>
       <div className='serviceHeading'>
       <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="h1"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
  Our Services
</AnimatedText>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit voluptatum blanditiis maxime, sit deleniti.</p>
       </div>
       <Row>
           <Col md={4} xs={6}>
               <Card>
                  <Card.Img variant="top" className="iconImg" src={icn1}/>
                  <hr/>
                  <Card.Body>
                      <Card.Title>Our team</Card.Title>
                      <Card.Text>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus veniam minima fugit nesciunt aspernatur saepe sequi, necessitatibus voluptatem sapiente?
                      </Card.Text>
                      <Button variant="primary">Click here</Button>
                  </Card.Body>
               </Card>
           </Col>

           <Col md={4} xs={6}>
               <Card>
                  <Card.Img variant="top" className="iconImg" src={icn2}/>
                  <hr/>
                  <Card.Body>
                      <Card.Title>Our Helpcare</Card.Title>
                      <Card.Text>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus veniam minima fugit nesciunt aspernatur saepe sequi, necessitatibus voluptatem sapiente?
                      </Card.Text>
                      <Button variant="primary">Click here</Button>
                  </Card.Body>
               </Card>
           </Col>


           <Col md={4} xs={6}>
               <Card className='card'>
                  <Card.Img variant="top" className="iconImg" src={icn3}/>
                  <hr/>
                  <Card.Body>
                      <Card.Title>Our Manager</Card.Title>
                      <Card.Text>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus veniam minima fugit nesciunt aspernatur saepe sequi, necessitatibus voluptatem sapiente?
                      </Card.Text>
                      <Button variant="primary">Click here</Button>
                  </Card.Body>
               </Card>
           </Col>
       </Row>
   </Container>
   </div>
  )
}

export default Service
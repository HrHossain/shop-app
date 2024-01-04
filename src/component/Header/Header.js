import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "./logo.png"
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link,NavLink } from 'react-router-dom'


const Header = ({setProgress,progress}) => {
   


  return (
    <>
    <div className='top-bar'>
        <Container>
            <Row>
            <Col md={6}>
                <div className='info'>
                    <ul>
                        <li>01855513852</li>
                        <li>||</li>
                        <li>info@gmail.com</li>
                    </ul>
                </div>
            </Col>
            <Col md={6}>
                <div className='social'>
                    <ul>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                            </a></li>
                            <li><a href="#">
                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                            </a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                    </ul>
                </div>
            </Col>
            </Row>
        </Container>
    </div>
    <header>
        <Container>
            <Row>
               <Col md={3}>
               <div className='logo'>
               <Link to="/"><img className="logoimg" src={logo} alt="logo"/></Link>
               </div>
               </Col>
               <Col md={9}>
                   <div className='navber'>
                       <ul>
                       
                           <li><NavLink onClick={()=>setProgress(100)} to='/'>Home</NavLink></li>
                           <li><NavLink onClick={()=>setProgress(20)} to='/service'>Services</NavLink></li>
                           <li><NavLink onClick={()=>setProgress(40)} to='/about'>About Us</NavLink></li>
                           <li><NavLink onClick={()=>setProgress(60)} to='/blog'>Blog</NavLink></li>
                           <li><NavLink onClick={()=>setProgress(80)} to='/team'>Team</NavLink></li>
                           <li><NavLink onClick={()=>setProgress(100)} to='/nopage'>Shop</NavLink></li>
                           
                       </ul>
                   </div>
               </Col>
               
            </Row>
        </Container>
    </header>
    </>
  )
}

export default Header
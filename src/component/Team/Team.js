import React from 'react'
import { Container } from 'react-bootstrap'
import "./Team.css"
import team1 from "./../Blog/blogImg/blog.jpg"
import team2 from "./../Blog/blogImg/blog1.jpg"
import team3 from "./../Blog/blogImg/blogimagetools.jpg"

const Team = () => {
  return (
    <section className='team'>
        <Container>
            <div className='teamheading'>
                <h1>Our Developer Team</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit sint voluptas!</p>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='box'>
                        <img src={team1} alt="team"/>
                    <h3>Node js team</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est debitis iste eveniet illum nihil dolore officiis sed aperiam alias iure fugit, eaque error quibusdam accusantium ipsum culpa autem vel?</p>
                    <button className='btn btn-primary'>click here</button>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='box'>
                        <img src={team2} alt="team"/>
                    <h3>Angular js team</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est debitis iste eveniet illum nihil dolore officiis sed aperiam alias iure fugit, eaque error quibusdam accusantium ipsum culpa autem vel?</p>
                    <button className='btn btn-primary'>click here</button>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='box'>
                        <img src={team3} alt="team"/>
                    <h3>React js team</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est debitis iste eveniet illum nihil dolore officiis sed aperiam alias iure fugit, eaque error quibusdam accusantium ipsum culpa autem vel?</p>
                    <button className='btn btn-primary'>click here</button>
                    </div>
                </div>
            </div>
        </Container>

    </section>
  )
}

export default Team
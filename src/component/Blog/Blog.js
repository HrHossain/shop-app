import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "./Blog.css"
import blog1 from "./blogImg/blog-post-image-guide.jpg"
import blog2 from "./blogImg/blog.jpg"
import blog3 from "./blogImg/blog.webp"
import blog4 from "./blogImg/blog1.jpg"
import blog5 from "./blogImg/blogimagetools.jpg"
import blog6 from "./blogImg/GettyImages-974683580.webp"
import blog7 from "./blogImg/istockphoto-1182641010-170667a.jpg"
import AnimatedText from 'react-animated-text-content';

const Blog = () => {
  return (
    <Container>
        <div className='BlogHeading'>
        <AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="wave"
  interval={0.06}
  duration={0.8}
  tag="h1"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"

>
Our Latest News
</AnimatedText>;
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, inventore.</p>
        </div>
        <Row>
            <Col md={3}>
                <Card className='bloghover'>
                    <Card.Img  src={blog1}/>
                    <Card.Body>
                        <Card.Title>the most beautiful tour of cox's bazar</Card.Title>
                        <Card.Text>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel tenetur, eligendi quod nostrum placeat alias commodi modi repellat hic rerum. Quaerat possimus rerum mollitia itaque neque eum dolorum esse.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img  src={blog2}/>
                    <Card.Body>
                        <Card.Title>the most beautiful tour of cox's bazar</Card.Title>
                        <Card.Text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel tenetur, eligendi quod nostrum placeat alias commodi modi repellat hic rerum. Quaerat possimus rerum mollitia itaque neque eum dolorum esse.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img  src={blog3}/>
                    <Card.Body>
                        <Card.Title>the most beautiful tour of cox's bazar</Card.Title>
                        <Card.Text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel tenetur, eligendi quod nostrum placeat alias commodi modi repellat hic rerum. Quaerat possimus rerum mollitia itaque neque eum dolorum esse.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img  src={blog4}/>
                    <Card.Body>
                        <Card.Title>the most beautiful tour of cox's bazar</Card.Title>
                        <Card.Text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel tenetur, eligendi quod nostrum placeat alias commodi modi repellat hic rerum. Quaerat possimus rerum mollitia itaque neque eum dolorum esse.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img  src={blog5}/>
                    <Card.Body>
                        <Card.Title>the most beautiful tour of cox's bazar</Card.Title>
                        <Card.Text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel tenetur, eligendi quod nostrum placeat alias commodi modi repellat hic rerum. Quaerat possimus rerum mollitia itaque neque eum dolorum esse.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img  src={blog6}/>
                    <Card.Body>
                        <Card.Title>the most beautiful tour of cox's bazar</Card.Title>
                        <Card.Text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel tenetur, eligendi quod nostrum placeat alias commodi modi repellat hic rerum. Quaerat possimus rerum mollitia itaque neque eum dolorum esse.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                <Card.Img  src={blog7}/>
                    <Card.Body>
                        <Card.Title>the most beautiful tour of cox's bazar</Card.Title>
                        <Card.Text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel tenetur, eligendi quod nostrum placeat alias commodi modi repellat hic rerum. Quaerat possimus rerum mollitia itaque neque eum dolorum esse.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Blog
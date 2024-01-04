import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row,Button } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton';
import "./NoPage.css"
import 'react-loading-skeleton/dist/skeleton.css'

const NoPage = () => {
  const[product,setProduct]=useState([]);

  
    useEffect(()=>{
     
      fetch("https://fakestoreapi.com/products")
      .then(data=>data.json())
      .then(data=>{
        setProduct(data)})
    
    },[])
    
  
  return (
    <Container>
      <hr/>
      <div className='heading-shop text-center'>
        <h1>Our Shop</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum officiis veniam quae voluptate atque ipsa reiciendis cum qui dignissimos.</p>
      </div>
      <Row>
       {
         product.length>0 ?
         product.map(data=>
          <Col md={3}>
            <Card>
            <img className='product-image' src={data.image} alt="product"/>
            <Card.Body>
              <Card.Header><h3>{data.category}</h3></Card.Header>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.description.slice(0,30)}</Card.Text>
              <Button className='btn btn-primary'>Add to cart</Button>
            </Card.Body>
            </Card>
          </Col>
         ):
         <>
<Card>
  <Row>
    <Col md={3}>
    <Card>
    <Skeleton width={150} height={150}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={150} height={15}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={140} height={15}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={150} height={30}  baseColor="#202020" highlightColor="#444"/>
    </Card>
    </Col>
    <Col md={3}>
    <Card>
    <Skeleton width={150} height={150}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={150} height={15}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={140} height={15}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={150} height={30}  baseColor="#202020" highlightColor="#444"/>
    </Card>
    </Col>
    <Col md={3}>
    <Card>
    <Skeleton width={150} height={150}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={150} height={15}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={140} height={15}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={150} height={30}  baseColor="#202020" highlightColor="#444"/>
    </Card>
    </Col>
    <Col md={3}>
    <Card>
    <Skeleton width={150} height={150}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={150} height={15}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={140} height={15}  baseColor="#202020" highlightColor="#444"/>
    <Skeleton width={150} height={30}  baseColor="#202020" highlightColor="#444"/>
    </Card>
    </Col>
  </Row>
</Card>




</>
         
       }
      </Row>

    </Container>
  )
}

export default NoPage
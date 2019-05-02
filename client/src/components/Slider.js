import React from 'react';
import Carousel from 'react-bootstrap/Carousel'



const Slider = () =>{
    return(
        <main>
  <Carousel>
  <Carousel.Item>
    <img
     
      className="d-block"
      src="https://res.cloudinary.com/dqphzmuq1/image/upload/v1556723407/samples/paintings/photo-1509440159596-0249088772ff.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider">
    <img
      className="d-block"
      src="http://res.cloudinary.com/dqphzmuq1/image/upload/v1556724427/samples/paintings/photo-1513156110471-8c6ff38c42c5.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="http://res.cloudinary.com/dqphzmuq1/image/upload/v1556818773/paintings/photo-1503220178855-e31ec372b8ad.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </main>
 
    )



}




export default Slider
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'



const Slider = () =>{
    return(
        <main className="slider">
  <Carousel>
  <Carousel.Item>
    <img
     
      className="d-block"
      src="http://res.cloudinary.com/dqphzmuq1/image/upload/v1556835271/samples/paintings/photo-1497534547324-0ebb3f052e88.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider">
    <img
      className="d-block"
      src="http://res.cloudinary.com/dqphzmuq1/image/upload/v1556835128/samples/paintings/photo-1503220178855-e31ec372b8ad.jpg"
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
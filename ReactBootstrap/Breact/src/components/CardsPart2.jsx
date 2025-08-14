import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import myImage4 from '../assets/Images/image4.png';
import myImage5 from '../assets/Images/image5.png';
import myImage6 from '../assets/Images/image6.png';
import myImage7 from '../assets/Images/image7.png';
import myImage8 from '../assets/Images/image8.png';
import myImage9 from '../assets/Images/image9.png';
import './CardsPart1.css';

const CardsPart2 = () => {
  return (
   <>
      <Row>
      {/* <h6>Life at Evalueserve</h6>
      <h2>AmiGo</h2> */}
        <Col md={6}>
          <section className='mx-3 '>
          {/* <h6>Life at Evalueserve</h6>
          <h2>AmiGo</h2> */}
            <Carousel className="mt-3">
              <Carousel.Item>
                <ExampleCarouselImage src={myImage4} alt="First slide" className="rounded-image" />
                <Carousel.Caption>
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage src={myImage5} alt="Second slide" className="rounded-image" />
                <Carousel.Caption>
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage src={myImage6} alt="Third slide" className="rounded-image" />
                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>
        </Col>
        <Col md={6}>
          <section className=''>
            {/* <h6>Life at Evalueserve</h6>
            <h2>AmiGo</h2> */}
            <Carousel className="mt-3">
              <Carousel.Item>
                <ExampleCarouselImage src={myImage7} alt="First slide" className="rounded-image" />
                <Carousel.Caption>
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage src={myImage8} alt="Second slide" className="rounded-image" />
                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage src={myImage9} alt="Third slide" className="rounded-image" />
                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>
        </Col>
      </Row>
    </>
  );
}

export default CardsPart2;


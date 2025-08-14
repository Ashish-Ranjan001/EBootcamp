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

const CardsPart1 = () => {
  return (
   <>
      <Row>
        <Col md={6}>
          <section className='mx-3 '>
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

export default CardsPart1;

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './ExampleCarouselImage';
// import myImage1 from '../assets/Images/image1.png';
// import myImage2 from '../assets/Images/image2.png';
// import myImage3 from '../assets/Images/image3.png';
// import myImage4 from '../assets/Images/image4.png';
// import myImage5 from '../assets/Images/image5.png';
// import myImage6 from '../assets/Images/image6.png';
// import './CardsPart1.css';
// const CardsPart1 = () => {
//   return (
//     <Container>
//       <Row>
//         <Col md={6}>
//           <section className='p-0'>
//             <Carousel className="mt-3">
//               <Carousel.Item >
//                 <ExampleCarouselImage src={myImage4} alt="First slide" />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <ExampleCarouselImage src={myImage5} alt="Second slide" />
//                 <Carousel.Caption>
//                   <h3>Second slide label</h3>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <ExampleCarouselImage src={myImage6} alt="Third slide" />
//                 <Carousel.Caption>
//                   <h3>Third slide label</h3>
//                   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//             </section>
//           </Col>
//         <Col md={6}>
//           <section className='p-0'>
//             <Carousel className="mt-3">
//               <Carousel.Item>
//                 <ExampleCarouselImage src={myImage1} alt="First slide" />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <ExampleCarouselImage src={myImage2} alt="First slide" />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <ExampleCarouselImage src={myImage3} alt="Third slide" />
//                 <Carousel.Caption>
//                   <h3>Third slide label</h3>
//                   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//           </section>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default CardsPart1;

// import React from 'react'
// import Container from 'react-bootstrap/esm/Container';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './ExampleCarouselImage';
// import myImage1 from '../assets/Images/image1.png';
// import myImage2 from '../assets/Images/image2.png';
// import myImage3 from '../assets/Images/image3.png';

// const CardsPart1 = () => {
//     return (
//         <>
//         <section> 
//             <Carousel className="mt-3 mx-4">
//                 <Carousel.Item>
//                     <ExampleCarouselImage src={myImage1} alt="First slide" />
//                     <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <ExampleCarouselImage src={myImage2} alt="Second slide" />
//                     <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <ExampleCarouselImage src={myImage3} alt="Third slide" />
//                     <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//         </section>
        
//         <section> 
//             <Carousel className="mt-3 mx-4">
//                 <Carousel.Item>
//                     <ExampleCarouselImage src={myImage1} alt="First slide" />
//                     <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <ExampleCarouselImage src={myImage2} alt="Second slide" />
//                     <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <ExampleCarouselImage src={myImage3} alt="Third slide" />
//                     <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//         </section>

//         </>
//     )
// }

// export default CardsPart1;

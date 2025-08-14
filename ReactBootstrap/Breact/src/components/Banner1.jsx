import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ExampleCarouselImage from './ExampleCarouselImage';
import myImage4 from '../assets/Images/image4.png';
import myImage5 from '../assets/Images/image5.png';
import myImage6 from '../assets/Images/image6.png';
import './Banner1.css';

const Banner1 = () => {
    return (
        <section className='bg-body-tertiary mx-3 mt-3' style={{ borderRadius: '15px' }}>
            <h6 className='mx-4 pt-3'>Knowledge Bytes</h6>
            <h1 className='mx-4'>Thought Leadership & Newsletters</h1>

            <div className="d-flex">
                <div className="carousel-container w-50">
                    <Carousel className="mt-3 bg-body-tertiary">
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
                </div>

                <div className="cards-container w-50 d-flex flex-wrap">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Card key={index} className="m-1 clickable-card">
                            <Card.Body>
                                <Card.Text>Card {index + 1}
                                    <p className='p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Banner1;

// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './ExampleCarouselImage';
// import myImage4 from '../assets/Images/image4.png';
// import myImage5 from '../assets/Images/image5.png';
// import myImage6 from '../assets/Images/image6.png';

// const Banner1 = () => {
//     return (
//         <section className='bg-primary mx-3 mt-3 w-50%' style={{ borderRadius: '15px' }} >
//             <h6 className='mx-4 pt-3'> Knowledge Bytes</h6>
//             <h1 className='mx-4'>Thought Leadership & Newsletters</h1>

//             <div>
//             <Carousel className="mt-3">
//               <Carousel.Item>
//                 <ExampleCarouselImage src={myImage4} alt="First slide" className="rounded-image" />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <ExampleCarouselImage src={myImage5} alt="Second slide" className="rounded-image" />
//                 <Carousel.Caption>
//                   <h3>Second slide label</h3>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <ExampleCarouselImage src={myImage6} alt="Third slide" className="rounded-image" />
//                 <Carousel.Caption>
//                   <h3>Third slide label</h3>
//                   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//             </div>
//         </section>
//     )
// }

// export default Banner1

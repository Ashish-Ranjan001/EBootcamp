import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import myImage1 from '../assets/Images/image1.png';
import myImage2 from '../assets/Images/image2.png';
import myImage3 from '../assets/Images/image3.png';

function UncontrolledExample() {
    return (
        <Carousel className="mt-3 mx-3">
            <Carousel.Item>
                <ExampleCarouselImage src={myImage1} alt="First slide" />
                <Carousel.Caption>
                 
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage src={myImage2} alt="Second slide" />
                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage src={myImage3} alt="Third slide" />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;


// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import image from '../assets/Images/im'

// function ReactBootstrapExample() {
//   // Define ExampleCarouselImage as a nested functional component
//   const ExampleCarouselImage = ({ src, alt }) => {
//     return (
//       <img
//         src={src}
//         alt={alt}
//         style={{
//           width: '100%',
//           height: '400px', // Adjust the height
//           objectFit: 'cover', // Ensures the image covers the container proportionally
//         }}
//       />
//     );
//   };

//   // Define the main component
//   return (
//     <Carousel>
//       <Carousel.Item>
//         {/* First Slide */}
//         <ExampleCarouselImage
//           src={image} // Replace with a real image URL
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* Second Slide */}
//         <ExampleCarouselImage
//           src="https://via.placeholder.com/800x400?text=Second+Slide" // Replace with a real image URL
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* Third Slide */}
//         <ExampleCarouselImage
//           src="https://via.placeholder.com/800x400?text=Third+Slide" // Replace with a real image URL
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default ReactBootstrapExample;

// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './ExampleCarouselImage';

// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;
// import About from "./copmponents/About";
// import Counter from "./copmponents/Counter";
// import Home from "./copmponents/Home";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
// import Product from "./copmponents/Product";

// const App = () => {
//   const obj = { name: 'Ashish', age: 34 };
//   return (
//     <>
//       <section className="container">
//         <h2 style={{color:"Red"}}>Welcome TO </h2>
//         {/* <Counter />
//         <hr />
//         <Home />
//         <hr />
//         <About myobj={obj} /> */}
//         <Product/>
//       </section>
//     </>

//   )
// }
// export default App;

import React from 'react'
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom'
import Home from './copmponents/Home'
import About from './copmponents/About'
import Product from './copmponents/Product'
import Counter from './copmponents/Counter'
import Nav from './copmponents/nav'
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Mumbai from './copmponents/Mumbai'
import Bangelor from './copmponents/Bangelor'
import Gurgaon from './copmponents/Gurgaon'
import Post from './copmponents/Post'
import User from './copmponents/User'
import Gallery from './copmponents/Gallery'

const App = () => {
  return (
    <main>
      <Router>
      <Nav/>
      <section className='container'>
        <Routes>
           <Route path='' element={<Home/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='products' element={<Product />}/>
           <Route path='contacts' element={<Counter />}>
           <Route path='gurugram' element={<Gurgaon/>}/>
            <Route path='mumbai' element={<Mumbai/>}/>
            <Route path='banglore' element={<Bangelor/>}/>
           </Route>
           <Route path='post' element={<Post/>}/>
           <Route path='user' element={<User/>}/>
           <Route path='gallery' element={<Gallery/>}/>
           <Route path='ref' element={<ReadableStreamDefaul/>}/>
             
           
        </Routes>
      </section>
      </Router>
    </main>
  )
}
 
export default App
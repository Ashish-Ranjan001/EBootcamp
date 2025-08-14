import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'

import Home from './components/Home';
import NavBar from './components/NavBar';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Cart from './components/Cart';

const App = () => {
  return (
    
   <main>
    <Router>
      <NavBar/>
      <Container>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='addproduct' element={<AddProduct/>}/>
          <Route path='editpro/:id' element={<EditProduct />}/>
          <Route path='cart' element={<Cart />}/>
        </Routes>
      </Container>
    </Router>
   </main>
  )
}

export default App

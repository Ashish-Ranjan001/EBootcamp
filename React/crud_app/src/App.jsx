import React from 'react'
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Addproduct from './Components/Addproduct';
import NavBar from './components/NavBar';
 
 
const App = () => {
  return (
    <main>
   
 
   <Router>
    <NavBar/>
    <Container>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='Addproduct' element={<Addproduct/>}/>
        </Routes>
    </Container>
   </Router>
 
 
</main>
  )
}
 
export default App
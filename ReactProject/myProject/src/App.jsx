

 
import React from 'react'
 
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Banner from './components/Banner'
import Nav from './components/Nav';
import Gallery from './components/Gallery'
import Home from './components/Home';
import Footer from './components/Footer';
 
const App = () => {
  return (
    <main>
      <Router>
        <Nav/>
 
        <section className='container'>
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/banner'element={<Banner/>}/>
            <Route path='/gallery'element={<Gallery/>}/>
            <Route path='/footer'element={<Footer/>}/>
          </Routes>
        </section>
      </Router>
    </main>
 
  )
}
 
export default App
 
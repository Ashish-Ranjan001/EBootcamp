import React from 'react'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import SubNav from './components/SubNav';
import Banner from './components/Banner';
import CardsPart1 from './components/CardsPart1';
import Banner1 from './components/Banner1';
import CardsPart2 from './components/CardsPart2';
import CardsPart3 from './components/CardsPart3';

const App = () => {
  return (
    <div>
      <Nav />
      <SubNav />
      <Banner />
      <CardsPart1 />
      <Banner1/>
      <CardsPart2/>
      <CardsPart3/>
    </div>
  )
}

export default App

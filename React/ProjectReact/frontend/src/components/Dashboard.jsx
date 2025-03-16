import React from 'react'
import Navb from './Navb'
import Container from 'react-bootstrap/Container';
import { Outlet, Route } from 'react-router-dom';

const Dashboard = () => {
  return (
   
    <main>
      <Navb/>
      <Container>
        <Outlet>
          
        </Outlet>
      </Container>
    </main>
  )
}

export default Dashboard

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
 
const ProductList = ({prod,delPro,addCart}) => {
  return (
    <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
      <Card.Title>{prod.name}</Card.Title>
      <Card.Text>
        Price : Rs.{prod.price} <br/>
        Quantity : {prod.quantity}
      </Card.Text>
      <Link className="btn btn-primary" to={`/editpro/${prod.id}`}>Edit</Link>
      <Button variant="danger" onClick={()=> delPro(prod.id)}>Delete</Button>
      <Button variant="secondary" onClick={()=> addCart(prod)}>Add Cart</Button>
    </Card.Body>
  </Card>
  )
}

export default ProductList
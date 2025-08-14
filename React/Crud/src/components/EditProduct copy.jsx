import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { addProduct, getProductById, updateData } from '../services/ProductService';
import Swal from 'sweetalert2';
import { useNavigate,useParams } from 'react-router-dom';

const EditProduct = () => {
    const {id}=useParams();
  const [state,setState]=useState({});
  const [errMsg,setErrMsg]=useState('');
  useEffect(()=>{
    getProductById(id)
    .then(res=> setState(res.data))
    .catch(err=> console.log(err))
  },[])
  const navigate=useNavigate();
  const handler=(event)=>{
     let {name,value}=event.target;
     setState({...state,[name]:value})
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(state.name!='' && state.price!='' && state.quantity!=''){
       updateData(id,state)
       .then(res=>{
         if(res.data){
          //redirect to products (useNavigate)
          navigate("/");
           Swal.fire("Product Updated");
           navigate("/");
         }
       })
       .catch(err=> console.log(err))
    }
    else{
      setErrMsg("Please enter blank fields!")
    }
  }
  return (
    <div>
      <h1>Edit Product</h1>
       {errMsg!='' &&  <Alert  variant='danger'>
          {errMsg}
        </Alert>}
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" onChange={handler} value={state.name}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" name="price" onChange={handler} value={state.price}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text" placeholder="Quantity" name="quantity" onChange={handler} value={state.quantity}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>  
    </div>
  )
}

export default EditProduct
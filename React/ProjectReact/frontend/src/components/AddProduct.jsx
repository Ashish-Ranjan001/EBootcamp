import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Swal from 'sweetalert2';
//import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {addProduct} from '../services/ProductService'

const validationRules = Yup.object({
  name: Yup.string()
    .required('Required')
    .matches(/^[a-zA-Z ]{1,100}$/, "Only alphabate allow"),
  Category: Yup.string()
    .required('Required')
    .typeError('Category must be a valid number'),
  price: Yup.number()
    .required('Required')
    .typeError('Price must be a valid number'),
  description: Yup.string()
    .required('Required')
    .typeError('Description must be a valid description'),
  manufacturer: Yup.string()
    .required('Required')
    .typeError('Manufacturer must be a valid manufacturer'),
  avilableitems: Yup.number()
    .required('Required')
    .typeError('Avilableitems must be a valid avilableitems'),
  // imageurl: Yup.string()
  //   .required('Required')
  //   .typeError('Imageurl must be a valid imageurl'),
});

const AddProduct = () => {
  // const navigate = useNavigate();

  const [imagePath, setImagePath] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const handleUpload = (event) => {
    if (event.target.files.length > 0) {
      setImagePath(event.target.files[0]);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      Category: '',
      price: '',
      description: '',
      manufacturer: '',
      avilableitems: '',
    },
    validationSchema: validationRules,
    onSubmit:(values)=>{
      console.log(values);
      
      if(imagePath!=''){
          if(imagePath.type==="image/jpeg" || imagePath.type==="image/png"){
             // if we want to send data with attachment to server we send with FormData property
             let formData=new FormData();
             formData.append('category',values.Category);
             formData.append('name',values.name);
             formData.append('price',values.price);
             formData.append('manufacturer',values.manufacturer);
             formData.append('availableItems',values.avilableitems);
             formData.append('description',values.description);
             formData.append('attach',imagePath);
             addProduct(formData)
             .then(res=>{
                if(res.data.err==0){
                   Swal.fire(res.data.msg)
                }
                if(res.data.err==1){
                  setErrMsg(res.data.msg);
                }
             })
          }
          else{
            setErrMsg("Only upload jpg or png image");
          }
      }
      else{
        setErrMsg("Please select a image");
      }
   }
})
return (
  <div className='wrapper'>
    <div className='login_wrapper'>
      <h1>Add Product</h1>
      <Form onSubmit={formik.handleSubmit}>
      {errMsg!='' && <Alert variant="danger"> {errMsg}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.name && formik.errors.name ? (
            <Alert variant='danger'>{formik.errors.name}</Alert>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>cateogry</Form.Label>
          <Form.Control type="text" placeholder="Category" name="Category" onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.Category && formik.errors.Category ? (
            <Alert variant='danger'>{formik.errors.Category}</Alert>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" name="price" onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.price && formik.errors.price ? (
            <Alert variant='danger'>{formik.errors.price}</Alert>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>description</Form.Label>
          <Form.Control type="text" placeholder="description" name="description" onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.description && formik.errors.description ? (
            <Alert variant='danger'>{formik.errors.description}</Alert>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>manufacturer</Form.Label>
          <Form.Control type="text" placeholder="manufacturer" name="manufacturer" onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.manufacturer && formik.errors.manufacturer ? (
            <Alert variant='danger'>{formik.errors.manufacturer}</Alert>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>avilableitems</Form.Label>
          <Form.Control type="text" placeholder="avilableitems" name="avilableitems" onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.avilableitems && formik.errors.avilableitems ? (
            <Alert variant='danger'>{formik.errors.avilableitems}</Alert>
          ) : null}
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicManu">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Image" onChange={handleUpload}/>
      </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  </div>
)
}

export default AddProduct
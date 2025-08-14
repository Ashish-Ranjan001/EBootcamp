import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { getProductById, updateData } from '../services/ProductService';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
 
const validationRules = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Z]{1,100}$/, "Only alphabets are allowed"),
  price: Yup.number()
    .required('Price is required')
    .typeError('Price must be a valid number'),
  quantity: Yup.number()
    .required('Quantity is required')
    .typeError('Quantity must be a valid number'),
});
 
const EditProduct = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({ name: '', price: '', quantity: '' });
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
 
  useEffect(() => {
    getProductById(id)
      .then(res => setInitialValues(res.data))
      .catch(err => console.log(err));
  }, [id]);
 
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: validationRules,
    onSubmit: values => {
      updateData(id, values)
        .then(res => {
          if (res.data) {
            Swal.fire("Product Updated");
            navigate("/");
          }
        })
        .catch(err => console.log(err));
    },
  });
 
  return (
    <div>
      <h1>Edit Product</h1>
      {errMsg !== '' && <Alert variant='danger'>{errMsg}</Alert>}
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Alert variant='danger'>{formik.errors.name}</Alert>
          ) : null}
        </Form.Group>
 
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <Alert variant='danger'>{formik.errors.price}</Alert>
          ) : null}
        </Form.Group>
 
        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            placeholder="Quantity"
            name="quantity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.quantity}
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <Alert variant='danger'>{formik.errors.quantity}</Alert>
          ) : null}
        </Form.Group>
 
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default EditProduct;
 
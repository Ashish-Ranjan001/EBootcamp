import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert  from 'react-bootstrap/Alert';
import { signIn } from '../services/AuthService';
const signinRules=Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('Required'),
})
const Login = () => {
  const navigate=useNavigate();
  const [errMsg,setErrMsg]=useState('');
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
     
    },
    validationSchema:signinRules
    ,
    onSubmit: values => {
      signIn(values)
      .then(res=>{
          if(res.data.err==0){
            //store token in localstorage
            localStorage.setItem("_token",res.data.token);
            console.log(res.data);
             navigate("/dashboard");
          }
          if(res.data.err==1){
            setErrMsg(res.data.msg);
         }
      })
    },
  });
  return (
    <div className='wrapper'>
       <div className='login_wrapper'>
        <h2 className='heading'> SignIn Here</h2>
        {errMsg!='' &&  <Alert variant='danger'>{errMsg}</Alert>}
       <Form onSubmit={formik.handleSubmit}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} name='email'/>
        {formik.touched.email && formik.errors.email ? (
         <Alert variant='danger'>{formik.errors.email}</Alert>
       ) : null}
      </Form.Group>
   
 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} name='password'/>
        {formik.touched.password && formik.errors.password ? (
         <Alert variant='danger'>{formik.errors.password}</Alert>
       ) : null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p className='para'> Don't have an account <Link to="/signup"> Register Here</Link></p>
       </div>
    </div>
  )
}
 
export default Login
 
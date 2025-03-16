import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert  from 'react-bootstrap/Alert';
import { signUp } from '../services/AuthService';

const signupRules=Yup.object({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('Required'),
    age: Yup.string()
    .required('Required'),
})
const Register = () => {
  const navigate=useNavigate();
  const [errMsg,setErrMsg]=useState('');
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      age:''
    },
    validationSchema:signupRules
    ,
    onSubmit: values => {
       signUp(values)
       .then(res=>{
          if(res.data.err==0){
              alert(res.data.msg);
              navigate("/")
          }
          if(res.data.err==1){
             setErrMsg(res.data.msg);
          }
       })
       .catch(err=> console.log(err))
    },
  });
  return (
    <div className='wrapper'>
       <div className='login_wrapper'>
        <h2 className='heading'> Signup Here</h2>
        {errMsg!='' &&  <Alert variant='danger'>{errMsg}</Alert>}
       <Form onSubmit={formik.handleSubmit}>
       <Form.Group className="mb-3" controlId="formBasicfirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.firstName && formik.errors.firstName ? (
         <Alert variant='danger'>{formik.errors.firstName}</Alert>
       ) : null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasiclastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" name='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.lastName && formik.errors.lastName ? (
         <Alert variant='danger'>{formik.errors.lastName}</Alert>
       ) : null}
       
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter age" onChange={formik.handleChange} onBlur={formik.handleBlur} name='age'/>
        {formik.touched.age && formik.errors.age ? (
         <Alert variant='danger'>{formik.errors.age}</Alert>
       ) : null}
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p className='para'>Already have an account <Link to="/"> Login Here</Link></p>
       </div>
    </div>
  )
}
 
export default Register
 
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import AddProduct from '../components/Addproduct';
const URL="http://localhost:8888";
const signIn=(data)=>{
    return axios.post(`${URL}/api/v1/auth`,data);
}
const signUp=(data)=>{
    return axios.post(`${URL}/api/v1/signup`,data);
}
const getToken=()=>{
     return localStorage.getItem("_token");
}
const getDatafromtoken=()=>{
    try{
      return jwtDecode(getToken());}
      catch(err){
        return null; // token not found 
      }
}
export {signIn,signUp,getToken,getDatafromtoken}

// name , cateogry , price , description , manufactror , image file field 
// 
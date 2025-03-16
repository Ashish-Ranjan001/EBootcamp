import axios from 'axios';
const URL="http://localhost:8888";
const addProduct=(data)=>{
    return axios.post(`${URL}/api/v1/products`,data);
}
// const getAllProduct=()=>{

// }
// const getProductById=(id)=>{
// }
// const deleteProduct=()=>{

// }
// const updateProduct=()=>{

// }


   
export {addProduct};

// AAD UPDATE DELETE  
// SEARCH BOX IMPLEMENTATION 
// PAGINATION SHOULS BE USED 
// DATATABLE 
// REACT PAGINATION 
// ADD CART OPTIONAL  
import React, { useContext, useEffect, useState } from 'react'
import { deleteProduct, getAllProduct } from '../services/ProductService';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductList from './ProductList';
import Swal from 'sweetalert2';
//import { CartContext } from '../context/CartContext';
import { useDispatch } from 'react-redux';
import { myaddCart } from '../store/CartSlice';
const Home = () => {
  const [proData, setProData] = useState([]);
  // const {myAddCart}=useContext(CartContext);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllProduct()
      .then(res => {
        console.log(res.data);
        setProData(res.data);
      })
      .catch(err => console.log(err))
  }, [])
  const delPro = (id) => {
    Swal.fire({
      title: "Do you want delete?",
      showDenyButton: true,
      confirmButtonText: "Ok",
      denyButtonText: `Cancel`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteProduct(id)
          .then(res => {
            let data = proData.filter(pro => pro.id != id);
            setProData(data);
            Swal.fire("Product Delete", "", "success");
          })
          .catch(err => console.log(err))

      }
    });
  }
  const addCart = (prod) => {
    if (localStorage.getItem('mycart') != undefined) {
      let flag = 0;
      let arr = JSON.parse(localStorage.getItem('mycart'));
      arr.forEach((val, ind) => {
        if (val.id === prod.id) {
          arr[ind].purchaseQuantity += 1;
          flag = 1;
        }
      })
      if (flag == 0) {
        let cartData = { ...prod, purchaseQuantity: 1 };
        arr.push(cartData)
        // myAddCart(arr);
        dispatch(myaddCart(arr));
        localStorage.setItem('mycart', JSON.stringify(arr));
        alert("Product add cart successfully!");
      }
      else {
        localStorage.setItem('mycart', JSON.stringify(arr));
        // myAddCart(arr);
        dispatch(myaddCart(arr));
        alert("Product add cart successfully!");
      }
    }
    else {
      let arr = [];
      let cartData = { ...prod, purchaseQuantity: 1 };
      arr.push(cartData)
      //  myAddCart(arr);
      dispatch(myaddCart(arr));
      localStorage.setItem('mycart', JSON.stringify(arr));
      alert("Product add cart successfully!");
    }
  }
  return (
    <div>
      <h2> Latest Products</h2>
      <Container>
        <Row>
          {proData.map(product =>
            <Col xs={4} key={product.id}>
              <ProductList prod={product} delPro={delPro} addCart={addCart} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default Home
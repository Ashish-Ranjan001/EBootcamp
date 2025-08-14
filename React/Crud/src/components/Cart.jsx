import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { myaddCart } from '../store/CartSlice';  
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
 
const Cart = () => {
  const { cartData } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const increase = (id) => {
    const newCart = cartData.map(item =>
      item.id === id ? { ...item, purchaseQuantity: item.purchaseQuantity + 1 } : item
    );
    dispatch(myaddCart(newCart));
    localStorage.setItem('mycart', JSON.stringify(newCart));
  };
 
  const decrease = (id) => {
    const newCart = cartData.map(item =>
      item.id === id && item.purchaseQuantity > 1 ? { ...item, purchaseQuantity: item.purchaseQuantity - 1 } : item
    );
    dispatch(myaddCart(newCart));
    localStorage.setItem('mycart', JSON.stringify(newCart));
  };
 
  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + (item.price * item.purchaseQuantity), 0);
    
  };
 
  return (
    <div>
      <h2>Cart Items</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <Button variant="primary" onClick={() => decrease(item.id)}>-</Button>
                {item.purchaseQuantity}
                <Button variant="primary" onClick={() => increase(item.id)}>+</Button>
              </td>
              <td>{item.price * item.purchaseQuantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Total: {calculateTotal()}</h3>
    </div>
  );
};
 
export default Cart;
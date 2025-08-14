import { CartContext } from "./CartContext";
import { useState } from "react";
const CartItems=({children})=>{
    const [cartData,setCartData]=useState(localStorage.getItem('mycart')!=undefined?JSON.parse(localStorage.getItem('mycart')):[]);
    const myAddCart=(data)=>{
        setCartData(data);
    }
    return(
        <CartContext.Provider value={{cartData:cartData,myAddCart:myAddCart}}>
             {children}
        </CartContext.Provider>
    )
}
export default CartItems;
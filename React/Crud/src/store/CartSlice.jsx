import { createSlice } from '@reduxjs/toolkit';
const initialState = { 
    cartData:localStorage.getItem('mycart')!=undefined?JSON.parse(localStorage.getItem('mycart')):[]
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        myaddCart(state,action){
           state.cartData=action.payload
        }
    }
})
export const { myaddCart } = cartSlice.actions
export default cartSlice.reducer
import React from 'react'
import ProductList from './ProductList'
import { productData } from '../assets/ProductData'

const Product = () => {
  return (
    <div>
      <h2>Product</h2>
      <div className='row'>
           {productData.products.map(prod=>
              <ProductList key={prod.id} proData={prod}/>
           )}
        </div>
    </div>
  )
}

export default Product

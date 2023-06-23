import React, {useEffect} from 'react'

import { useSelector, useDispatch} from 'react-redux'
import {deleteProduct} from '../app/cart/cartSlice'

import '../styles/productListStyle.css'

const ProductsBought = () => {

  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

  const handleDelete = (...product) => {
    dispatch(deleteProduct(product))
  }
  
  return (
    <div >
        {
            products.map( (product) => <div className='item' key={product.id}>
                <p>{product.name}</p>
                <button onClick={() => handleDelete( product.id, product.price)}>delete</button>
            </div> )
        }
    </div>
  )
}

export default ProductsBought
import React from 'react'
import potions from '../assets/potions.json' 
import '../styles/productListStyle.css'

import { addProduct} from '../app/cart/cartSlice'
import { useDispatch} from 'react-redux'

export const ProductsList = () => {

  const dispatch = useDispatch()

  const handleClick = (product) => {
      dispatch(addProduct(product))
  }

  return (
    <div className='list'>
        {
          potions.map(product => 
                <div className='product' key={product.id}>
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <img src={product.picture}></img>
                    <button onClick={()=> handleClick({...product, id: Math.random()})}>buy</button>
                </div>
            )
        }
    </div>
  )
}

export default ProductsList
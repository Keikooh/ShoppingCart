import { useState } from 'react'
import './App.css'
import ProductsList from './components/productsList'
import ProductsBought from './components/productsBought'

import { useSelector, useDispatch } from 'react-redux'
import { addProduct} from './app/cart/cartSlice'

import './styles/containerStyle.css'

function App() {
  const total = useSelector((state)=> state.cart.total)

  return (
    <div> 
      <h2>Your cart</h2>
      <span>By Keikooh</span>
      <div className='container' >
        <ProductsList/>
        <div className='order'>
          <h4>Order details</h4>
          <p><b>Total: </b>{total}</p>
          <ProductsBought/>
        </div>
      </div>
    </div>
  )
}

export default App

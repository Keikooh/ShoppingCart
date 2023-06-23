import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  total: '0.00'
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct:(state, action) => {
      state.products.push(action.payload)
      state.total = (parseFloat(state.total) + parseFloat(action.payload.price)).toFixed(2);
    },
    deleteProduct: (state, action) => {
      const [id, price] = action.payload
      state.products = state.products.filter(product => product.id !== id);
      state.total = (parseFloat(state.total) - parseFloat(price)).toFixed(2);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct } = cartSlice.actions

export default cartSlice.reducer
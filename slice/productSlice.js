import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: 0,
  },
  reducers: {
    decrement: state => {
      state.value -= 1
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = productSlice.actions

export default productSlice.reducer
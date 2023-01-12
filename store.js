import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import cartSlice from './slice/cartSlice'
export default configureStore({
  reducer: {
    counter:counterSlice,
    cart: cartSlice

  }
})
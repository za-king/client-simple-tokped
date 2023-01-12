import React from "react";
import {useDispatch} from 'react-redux'

import { addToCart } from "../slice/cartSlice";


const CartComp = (props) => {
  const {dataById} = props

  const dispatch = useDispatch()
  const handleAddToCart = (product) =>{
    dispatch(addToCart(product))
  }

  
  return (
    <div className="h-80 w-64 border rounded-lg p-4">
      <p className="text-md font-medium">Atur Jumlah dan Catatan</p>

      <div className="border">
        <button className="w-8">-</button>
        <input type="text" placeholder="0" className="w-4" />
        <button className="w-8">+</button>
      </div>

      <button className="rounded-lg text-center bg-green-500" onClick={()=>{handleAddToCart(dataById)}}>
        Add To Cart
      </button>
    </div>
  );
};

export default CartComp;

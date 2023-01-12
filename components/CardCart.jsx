import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, decreaseCart } from "../slice/cartSlice";

import { HiOutlineTrash } from "react-icons/hi";


const CardCart = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleDecreaseProduct = (product) => {
    dispatch(decreaseCart(product));
  };

  return (
    <div className="w-[700px] h-[200px] border-b-4 p-4 mt-4">
      <div className="mb-2">
        <p className="font-bold text-slate-700">Alesha Sport Shop</p>
        <p className="text-slate-500">{product.location}</p>
      </div>

      <div className="flex mb-2">
        <Image src={product.image} width={70} height={70} alt="cartImage" className="rounded mr-2" />
        <div >
          <p className="">{product.title}</p>
          <p className="font-bold text-slate-700"> Rp{product.price}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#03AC0E] ">add notes</p>
        <div></div>
        <div>
          Move To List |
          <button
            onClick={() => {
              handleRemoveProduct(product);
            }}
          >
            <HiOutlineTrash   style={{fontSize: "20px"}}/>
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleDecreaseProduct(product);
            }}
            className="border-2 rounded-full w-6 h-6 font-bold text-lg " 
          >
            -
          </button>
          <input type="text" value={product.cartQuantity} className="w-8 border-b-2 text-center" />
          <button
            onClick={() => {
              handleAddToCart(product);
            }}
            className="border-2 rounded-full w-6 h-6 font-bold text-lg"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;

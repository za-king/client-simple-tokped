import React,{use, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTotals } from "../../slice/cartSlice";
import Layout from "../../components/Layout";
import CardCart from "../../components/CardCart";

import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineNavigateNext } from "react-icons/md";

function Cart() {
  const cartsItem = useSelector((state) => state.cart.cartItem);

  const cart =useSelector((state) => state.cart) 
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTotals())
  },[cart])

  console.log(cart)
  return (
    <>
      <Layout>
        <div className="container mt-28 min-h-screen grid grid-cols-2 justify-items-center">
          <div>
            <p>Cart</p>
            {cartsItem.map((item) => {
              return <CardCart product={item} />;
            })}
          </div>
          <div className="w-80 h-[350px] border rounded-lg shadow">
            <div className="border-b-4 h-20 ">
              <button className="flex justify-between  justify-items-center items-center h-12 w-72 text-base px-2 font-medium text-slate-600  border rounded m-auto mt-6">
                <CiDiscount1 style={{ color: "green" ,fontSize: '25px'  }} />
                Makin Hemat Pakai Promo <MdOutlineNavigateNext />
              </button>
            </div>

            <div className="p-4">
              <div className="border-b-2">
                <p className="mb-2 text-lg font-bold text-slate-700">Shopping summary</p>

                <div className="text-slate-500 font-medium flex justify-between"><p>Total Price</p> <p>{cart.cartTotalAmaoun}</p></div>
                <div className="text-slate-500 font-medium mb-2" >Total Discount</div>
              </div>
            </div>

            <div className="px-4">
              <p className="text-lg font-bold text-slate-700 mb-4 flex justify-between"><p>Grant Total</p> <p>{cart.cartTotalAmaoun}</p></p>
              <button className="w-60 h-12 bg-[#03AC0E] rounded-lg">Buy</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Cart;

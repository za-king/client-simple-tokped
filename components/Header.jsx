import React from "react";
import SearchBar from "./SearchBar";
import { useRouter } from "next/router";
import Image from "next/image";
import tokpedLogo from "../asset/e5b8438b.svg";
import { HiShoppingCart } from "react-icons/hi";


const Header = () => {
  const router = useRouter();

  const handleCart = ()=>{
    router.push('/cart')
  }
  return (
    <>
      <div className="left-0 right-0 top-0 bg-white h-20 flex justify-between  border border-b-2 shadow-md fixed z-20">
        <div className="flex justify-items-center align-item-center justify-center content-center m-auto">
          <Image src={tokpedLogo} alt="Picture of the author" className="h-8" />
        </div>

        <div className="">
          <SearchBar />
        </div>

        <div className="flex m-auto">
          <div className="mr-2">
            <HiShoppingCart size={25} color="gray" onClick={(e) =>{handleCart()}} />
          </div>
          <ul className="flex m-auto">
            <li className="mr-2">
              <button
                className="border border-green-600 rounded-lg w-20 h-8 text-green-600 "
                onClick={(e) => {
                  router.push("/login");
                }}
              >
                Login
              </button>
            </li>
            <li className="cursor-pointer">
              <button className="border border-green-600 rounded-lg w-20 h-8 text-white bg-green-600" onClick={(e) => {
                  router.push("/register");
                }}>
                
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

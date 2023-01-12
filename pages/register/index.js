import React from "react";
import Image from "next/image";
import tokpedLogo from "../../asset/e5b8438b.svg";
import registerLogo from "../../asset/register-tokped.png";
import RegisterComp from "../../components/RegisterComp";
function Register() {
  return (
    <div>
      <div className="w-screen my-10">
      <Image src={tokpedLogo} alt="Picture of the author" className="h-8 m-auto" />
      </div>
      

      <div className="grid grid-cols-2 mt-12">
        <div className="justify-self-end mr-12">
          <Image src={registerLogo} alt="Picture of the author" width={350} />
          <h2 className="text-gray-800 text-2xl font-bold mt-4">
          Discover Millions of Trusted Shops
          </h2>
          <p className="text-gray-500 ">
          Join and enjoy the best online shopping experience
          </p>
        </div>
        <div className="ml-12">
          <RegisterComp />
        </div>
      </div>
    </div>
  );
}

export default Register;

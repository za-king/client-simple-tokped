import React from "react";
import Image from "next/image";
import tokpedLogo from "../../asset/e5b8438b.svg";
function Login() {
  return (
    <>
      <div className="w-screen my-10">
        <Image
          src={tokpedLogo}
          alt="Picture of the author"
          className="h-8 m-auto"
        />
      </div>

      <div className="constainer h-[300px]">
        <div className="bg-scroll bg-my_bg_image h-[550px] bg-center bg-no-repeat bg-contain">
          <div className="bg-white h-[450px] w-[350px] border absolute rounded-lg relative m-auto p-8">
            <div className="flex justify-between mt-4">
              <p className="text-slate-700 text-2xl font-bold">Login</p>
              <p className="text-[#03AC0E] text-sm">Sign Up</p>
            </div>

            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

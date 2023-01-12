import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const RegisterComp = () => {
  return (
    <div>
      <div className="w-[400px] h-[450px] border shadow-lg rounded text-center p-12">
        <h2 className="text-gray-600 text-2xl font-bold ">Sign Up Now</h2>
        <p className="text-gray-500 font-normal">
          Already have a Tokopedia account?
          <a href="login" className="text-green-600">
            Log In
          </a>
        </p>
        <div className="my-4">
          <button className="border rounded-lg w-full h-10  font-bold  flex justify-items-center items-center p-2">
            <i className="mr-24"><FcGoogle/></i>
              
            
            Google
          </button>
        </div>
        <div className="flex items-center ">
          <div className="flex-grow h-px bg-gray-400"></div>

          <span className="flex-shrink  text-gray-500 px-4  font-light">
            or sign up with
          </span>

          <div className="flex-grow h-px bg-gray-400"></div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500 text-start">Phone Number or Email</p>
          <input type="text" className="border rounded-lg w-full h-10" />
          <p class="mt-2 text-sm text-gray-500 text-start">Example: email@tokopedia.com</p>
        </div>

        <button className="bg-gray-200 w-full h-10 rounded-lg mt-4">Sign Up</button>

        <div className="mt-4 text-sm text-gray-600">
          <p>By signing up, I agree to</p>
          <p className="">Terms & Conditions and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterComp;

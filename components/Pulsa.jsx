import React from "react";

const Pulsa = () => {
  return (
    <div className="grid grid-cols-5 gap-4 justify-items-center items-center mt-4 ml-4">
      <div className="col-span-2">
        <p className="text-sm text-gray-500 text-start">Phone Number</p>
        <input type="text" className="border rounded-lg w-full h-10" />
      </div>
      <div className="col-span-2">
        <p className="text-sm text-gray-500 text-start">Nominam</p>
        <input type="text" className="border rounded-lg w-full h-10" />
      </div>
      <div className=""><button className="bg-gray-300 rounded-lg w-14 h-12 text-base ">Buy</button></div>
    </div>
  );
};

export default Pulsa;

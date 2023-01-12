import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const Card = (props) => {
  const {item} = props
  const router = useRouter()
  const handleClick = (e) =>{
    router.push(`detail/${e}`)
  }

  return (
    <>
      <div className="w-48 h-96 shadow-md rounded my-12 cursor-pointer " onClick={(e) =>{handleClick(item.id)}}>
        <Image unoptimized src={item.image} alt="Landscape picture" width={500} height={500} />
        <p className="  truncate overflow-hidden text-sm m-2">{item.title}</p>
        <h3 className="font-bold m-2">Rp {item.price}</h3>
        <p className="w-20 bg-green-200 rounded text-center font-semibold text-xs text-green-600 m-2">{item.promo}</p>
        <div className="m-2">
          <p className="text-gray-500 text-sm font-medium">{item.location}</p>
        </div>
        <div className="m-2 text-gray-500 text-sm font-medium">{item.rating} | Terjual {item.sold}+</div>
      </div>
    </>
  );
};

export default Card;

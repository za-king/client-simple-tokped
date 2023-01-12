import React from "react";

const CategorySticky = () => {
  const categoryStickyData = [
    { id: 0, title: "For You", style:"w-48 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded text-white text-center "},
    { id: 1, title: "Sepak Bola", style:"w-48 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded text-white text-center " },
    { id: 2, title: "Galery Fashion", style:"w-48 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded text-white text-center " },
    { id: 3, title: "Spesial Discount", style:"w-48 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded text-white text-center " },
    { id: 4, title: "Helm Motor", style:"w-48 h-16 bg-gradient-to-r from-green-600 to-green-500 rounded text-white text-center " },
  ];
  return (
    <div className="container border-t-4 flex justify-around justify-items-center items-center sticky top-20 bg-white">
      {categoryStickyData.map((item) => {
        return (
          <div className="mt-4 ">
            <div className={item.style}>
            {item.title}
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySticky;

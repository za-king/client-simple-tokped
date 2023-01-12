import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { addProducts } from "../api/hello";

function AddProduct() {
  const [dataProduct, setDataProduct] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
    location: "",
    rating: "",
    sold: "",
  });

  const handleAddProduct = (e) => {
    const { name, value } = e.target;

    setDataProduct((prev) => {
      return { ...prev, [name]: value };
    });

    console.log(dataProduct);
  };

  const addButtonProduct = () => {
    addProducts(dataProduct)
  };

  return (
    <div className="container p-12">
      <div className=" bg-gray-400">
        <p>Add Product</p>
        <form action="">
          <div>
            <label htmlFor="">title</label>
            <input
              type="text"
              name="title"
              onChange={(e) => {
                handleAddProduct(e);
              }}
              value={dataProduct.title}
            />
          </div>
          <div>
            <label htmlFor="">image</label>
            <FileBase64 multiple={false} onDone={({base64}) =>{setDataProduct((prev) => {
      return { ...prev, image: base64 };
    });}} />
          </div>
          <div>
            <label htmlFor="">price</label>
            <input
              type="text"
              name="price"
              onChange={(e) => {
                handleAddProduct(e);
              }}
              value={dataProduct.price}
            />
          </div>
          <div>
            <label htmlFor="">description</label>
            <input
              type="text"
              name="description"
              onChange={(e) => {
                handleAddProduct(e);
              }}
              value={dataProduct.description}
            />
          </div>
          <div>
            <label htmlFor="">location</label>
            <input
              type="text"
              name="location"
              onChange={(e) => {
                handleAddProduct(e);
              }}
              value={dataProduct.location}
            />
          </div>
          <div>
            <label htmlFor="">rating</label>
            <input
              type="text"
              name="rating"
              onChange={(e) => {
                handleAddProduct(e);
              }}
              value={dataProduct.rating}
            />
          </div>
          <div>
            <label htmlFor="">sold</label>
            <input
              type="text"
              name="sold"
              onChange={(e) => {
                handleAddProduct(e);
              }}
              value={dataProduct.sold}
            />
          </div>
        </form>

        <button
          className="bg-green-500"
          onClick={(e) => {
            addButtonProduct();
          }}
        >
          add product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;

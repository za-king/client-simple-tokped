import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { addCategory } from "../api/hello";

function AddCategory() {
  const [dataCategory, setDataCategory] = useState({
    category_name: "",
    category_image: "",
  });

  const handleAddCategory = (e) => {
    const { name, value } = e.target;

    setDataCategory((prev) => {
      return { ...prev, [name]: value };
    });

    console.log(dataCategory);
  };

  const addButtonCategory = () => {
    addCategory(dataCategory)
  };
  return (
    <div className="container p-12">
      <div className=" bg-gray-400">
        <p>Add Category</p>

        <form action="">
          <div>
            <label htmlFor="">category name</label>
            <input type="text" name="category_name"
              onChange={(e) => {
                handleAddCategory(e);
              }}
              value={dataCategory.category_name}/>
          </div>

          <div>
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => {
                setDataCategory((prev) => {
                  return { ...prev, category_image: base64 };
                });
              }}
            />
          </div>
        </form>
        <button onClick={(e) => {
            addButtonCategory();
          }}>add Category</button>
      </div>
    </div>
  );
}

export default AddCategory;

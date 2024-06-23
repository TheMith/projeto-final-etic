import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";
import { backend_url } from "../../App";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    image: "",
    category: "cpu",
    new_price: "",
    old_price: ""
  });

  const addProduct = async () => {
    try {
      let formData = new FormData();
      formData.append('product', image);

      // Upload image first
      const uploadResponse = await fetch(`${backend_url}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Failed to upload image');
      }

      const uploadData = await uploadResponse.json();

      // Update product details with uploaded image URL
      const updatedProduct = {
        ...productDetails,
        image: uploadData.image_url
      };

      // Add product with updated details
      const addProductResponse = await fetch(`${backend_url}/addproduct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!addProductResponse.ok) {
        throw new Error('Failed to add product');
      }

      const addProductData = await addProductResponse.json();

      // Handle success or show appropriate message to the user
      if (addProductData.success) {
        alert("Product Added Successfully");
        // Reset form or navigate to product list page
      } else {
        alert("Failed to add product");
      }

    } catch (error) {
      console.error('Error:', error.message);
      alert("An error occurred while adding the product");
    }
  };

  const handleInputChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={handleInputChange}
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Product description</p>
        <input
          type="text"
          name="description"
          value={productDetails.description}
          onChange={handleInputChange}
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="number"
            name="old_price"
            value={productDetails.old_price}
            onChange={handleInputChange}
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="number"
            name="new_price"
            value={productDetails.new_price}
            onChange={handleInputChange}
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product category</p>
        <select
          name="category"
          value={productDetails.category}
          onChange={handleInputChange}
          className="add-product-selector"
        >
          <option value="cpu">CPU</option>
          <option value="gpu">GPU</option>
          <option value="ram">RAM</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <p>Product image</p>
        <label htmlFor="file-input">
          <img
            className="addproduct-thumbnail-img"
            src={!image ? upload_area : URL.createObjectURL(image)}
            alt=""
          />
        </label>
        <input
          type="file"
          id="file-input"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          hidden
        />
      </div>
      <button className="addproduct-btn" onClick={addProduct}>ADD</button>
    </div>
  );
};

export default AddProduct;

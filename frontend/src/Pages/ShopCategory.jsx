import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('https://projeto-final-etic-api.onrender.com/allproducts');
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="shopcategory">
      <div className="shopcategory-products">
        {allProducts.filter(item => item.category === props.category).map((item, i) => (
          <Item 
            id={item.id} 
            key={i} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;

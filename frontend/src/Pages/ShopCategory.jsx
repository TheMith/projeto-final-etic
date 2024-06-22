import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])
    
  return (
    <div className="shopcategory">
      <div className="shopcategory-products">
        {allproducts.map((item,i) => {
            if(props.category===item.category)
            {
              return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>;
            }
            else
            {
              return null;
            }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
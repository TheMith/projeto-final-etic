import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";

const ProductDisplay = ({product}) => {

  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={backend_url + product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{product.old_price}{currency}</div>
          <div className="productdisplay-right-price-new">{product.new_price}{currency}</div>
        </div>
        <div className="productdisplay-right-description">
        {product.description}
        </div>
        <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;

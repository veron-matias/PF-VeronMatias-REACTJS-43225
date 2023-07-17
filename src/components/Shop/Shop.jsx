import React from "react";
import imgShop from "./ShopIco2.PNG";
import "./Shop.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Shop = () => {
  const {totalCantidad} = useContext(CartContext);

  return (
    <Link to ="/Cart">
      <div className="imgShop">
        <img src={imgShop} alt="Icono Shop" />
        <span style={{ color: "white" }}> {totalCantidad()} </span>
      </div>
    </Link>
  );
};

export default Shop;

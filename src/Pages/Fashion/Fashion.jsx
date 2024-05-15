import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../Products/Products";

const Fashion = ({ selectedOption, onAddToCart }) => {
  return (
    <>
      <div>
        <Products selectedOption={selectedOption} onAddToCart={onAddToCart} />
      </div>
    </>
  );
};

export default Fashion;

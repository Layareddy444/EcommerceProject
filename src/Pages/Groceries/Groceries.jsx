import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";

const Groceries = ({ selectedOption,onAddToCart }) => {
 
  console.log(selectedOption)
  
  return (
    <>
      <div>
        <Products selectedOption={selectedOption} onAddToCart={onAddToCart}/>
      </div>
    </>
  );
};

export default Groceries;

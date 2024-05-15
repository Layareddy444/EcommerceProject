import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import HeroSection from "../Home/Components/HeroSection"; 
import { NavLink } from "react-router-dom";

const Products = ({ selectedOption, onAddToCart }) => {
  console.log(selectedOption);
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("product.json");
        console.log(response.data);
        if (Array.isArray(response.data.productData)) {
          setProductData(response.data.productData);
          const categoriesData = response.data.productData.map(({ cat_name, id, image }) => ({ cat_name, id, image }));
          setCategories(categoriesData);
          console.log(categoriesData);
        } else {
          console.error(
            "Product data is not an array:",
            response.data.productData
          );
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  // adding item to cart
  const handleAddToCart = (item, quantity) => {
    item.quantity = quantity; 
    onAddToCart(item); 
  };

  // increment quantity of items
  const incrementQuantity = (item) => {
    const newQuantity = (item.quantity || 0) + 1;
    handleAddToCart(item, newQuantity); 
  };

  // decrement quantity of items
  const decrementQuantity = (item) => {
    const newQuantity = (item.quantity || 0) - 1;
    if (newQuantity >= 0) {
      handleAddToCart(item, newQuantity); 
    }
  };

  // Filtering productData based on selectedOption(dropdown)
  const filteredProducts = selectedOption
    ? productData.filter((category) => category.cat_name === selectedOption)
    : productData;

  return (
    <div>
      <HeroSection categories={categories} />
      <div className="products-container">
        {filteredProducts.map((category) => (
          <div key={category.id}>
            <h2 className="category-heading">{category.cat_name}</h2>
            {/* <img src={category.image} alt={category.cat_name} /> */}
            {category.items.map((item) => (
              <div className="category" key={item.cat_name}>
                <h2 className='subcategory'>{item.cat_name}</h2>
                {Array.isArray(item.products) ? (
                  item.products.map((product) => (
                    <div className="products" key={product.id}>
                      <img
                        src={product.catImg}
                        alt={product.productName}
                        style={{ width: "150px" }}
                      />
                      <h3>{product.productName}</h3>
                      <p>Price: {product.price}</p>
                      <p>Discount: {product.discount}%</p>
                      <p>Brand: {product.brand}</p>
                      <p>Rating: {product.rating}</p>
                      <p>Description: {product.description}</p>
                      <div>
                        {product.quantity !== undefined && product.quantity > 0 ? (
                          <>
                            <button
                              className="decrement-btn"
                              onClick={() => decrementQuantity(product)}
                            >
                              -
                            </button>
                            <span>{product.quantity}</span>
                            <button
                              className="increment-btn"
                              onClick={() => incrementQuantity(product)}
                            >
                              +
                            </button>
                          </>
                        ) : (
                          <button
                            className="addtocart-btn"
                            onClick={() => handleAddToCart(product, 1)}
                          >
                            Add to cart
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No products available</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;


import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
import SearchBar from '../Navbar/SearchBar';

const Navbar = ({ onOptionSelect, onSearch }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onOptionSelect(option);
  };

  return (
    <nav className="navbar">
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle id="dropdown">
            {selectedOption || "Select Category"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to="/home"
              onClick={() => handleOptionSelect("All")}
            >
              All
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to="/groceries"
              onClick={() => handleOptionSelect("Groceries")}
            >
              Groceries
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to="/electronics"
              onClick={() => handleOptionSelect("Electronics")}
            >
              Electronics
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to="/fashion"
              onClick={() => handleOptionSelect("Fashion")}
            >
              Fashion
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="searchbar">
        <SearchBar onSearch={onSearch} />
        <div className="searchresults"></div>
      </div>

      <div className="cart-icon">
        <Link to="/cart" className="cart-icon">
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

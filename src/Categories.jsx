import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

function Categories() {
  const { selectedOption } = useParams();
  const [data, setData] = useState([]);

  const [number, setNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
        const jsonData = await response.json();
        const dataArray = Object.entries(jsonData).map(([key, value]) => ({
          key,
          value,
        }));

        setData(dataArray[0].value[number]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, [number]);

  return (
    <>
      <div className="searchbar">
        <form>
          <div className="input-field">
            <input id="search" type="search" />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
          </div>
        </form>
      </div>
      <div>
        <button onClick={() => setNumber(0)}>Groceries</button>
        <button onClick={() => setNumber(1)}>Electronics</button>
        <button onClick={() => setNumber(2)}>Fashion</button>
        {data &&
          Object.entries(data).map(([key, value]) => (
            <div key={key}>
              <h1>{value.cat_name}</h1>
              <img src={value.image} alt={value.cat_name} />
              {value.products &&
                value.products.map((item, index) => (
                  <div key={index}>
                    <h2>{item.productName}</h2>
                    <h3>{item.description}</h3>
                    <img src={item.catImg} alt={item.productName} />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </>
  );
}

export default Categories;

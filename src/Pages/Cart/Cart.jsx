import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity, totalAmount }) => {
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      onRemoveFromCart(itemId);
    } else {
      onUpdateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.catImg} alt={item.productName} style={{ width: '150px' }} />
              <h3>{item.productName}</h3>
              <p>Price: {item.price}</p>
              <p>Discount: {item.discount}%</p>
              <p>Brand: {item.brand}</p>
              <p>Rating: {item.rating}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  min="1"
                />
              </p>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total Amount: Rs {totalAmount.toFixed(2)}</h2>
       <button>  <Link to={{ pathname: "/payment", state: { totalAmount } }}>Proceed to Buy</Link></button> 
        </div>
      )}
    </div>
  );
};

export default Cart;


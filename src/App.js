import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Groceries from './Pages/Groceries/Groceries';
import Electronics from './Pages/Electronics/Electronics';
import Fashion from './Pages/Fashion/Fashion';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Cart from './Pages/Cart/Cart';
import Payment from './Pages/Payment/Payment';

const App = () => {
   // States to track selected option and cart items
  const [selectedOption, setSelectedOption] = useState(''); 
  const [cartItems, setCartItems] = useState([]); 

  // add to cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(cartItem => cartItem.id === item.id);
      if (itemExists) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter(cartItem => cartItem.id !== itemId)
    );
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map(cartItem =>
        cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const getTotalAmount = () => {
    
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/,/g, ""));
      if (isNaN(price)) return total; 
      return total + price * item.quantity;
    }, 0);
    
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option); 
  };

  return (
    <>
      <Router>
        <Navbar onOptionSelect={handleOptionSelect} />
        <Routes>
          <Route path='/' element={<Home onAddToCart={handleAddToCart} />} />
          <Route
            path='/cart'
            element={
              <Cart
                cartItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity}
                totalAmount={getTotalAmount()}
              />
            }
          />
          <Route path='/home' element={<Home onAddToCart={handleAddToCart} />} />
          <Route path='/groceries' element={<Groceries selectedOption={selectedOption} onAddToCart={handleAddToCart} />} />
          <Route path='/electronics' element={<Electronics selectedOption={selectedOption} onAddToCart={handleAddToCart} />} />
          <Route path='/fashion' element={<Fashion selectedOption={selectedOption} onAddToCart={handleAddToCart} />} />
          <Route path='/payment' element={<Payment/>}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

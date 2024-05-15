// // Payment.jsx
// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const totalAmount = location.state ? location.state.totalAmount : 0;

//   const handlePayment = () => {
//     // Add your payment logic here
//     console.log('Total amount:', totalAmount);
//     // Show a pop-up box with a message
//     window.alert('Thanks for the payment. Your order has been placed.');
//     // Redirect to the home page
//     navigate('/');
//   };

//   return (
//     <div>
//       <h1>Payment</h1>
//       <h2>Total Amount: Rs {totalAmount.toFixed(2)}</h2>
//       <button onClick={handlePayment}>Make Payment</button>
//     </div>
//   );
// };

// export default Payment;

// Payment.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalAmount } = location.state || { totalAmount: 0 };

  const handlePayment = () => {
    // Add your payment logic here
    console.log('Total amount:', totalAmount);
    // Show a pop-up box with a message
    window.alert('Thanks for the payment. Your order has been placed.');
    // Redirect to the home page
    navigate('/');
  };

  return (
    <div>
      <h1>Payment</h1>
      <h2>Total Amount: Rs {totalAmount.toFixed(2)}</h2>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default Payment;

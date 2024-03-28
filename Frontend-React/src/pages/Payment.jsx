import React, { useState } from 'react';
import '../assets/css/Payment.css';
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';

function Payment() {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [upiNumber, setUpiNumber] = useState('');
  const[expirydate,setExpirydate]=useState('');
  const[cvv,setCvv]=useState('');

  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log('Payment Amount:', paymentAmount);
    console.log('Payment Date:', paymentDate);
    console.log('Payment Mode:', paymentMode);
    if (paymentMode === 'Credit Card') 
    {
      console.log('Credit Card Number:', creditCardNumber);
    } 
    else if (paymentMode === 'UPI') {
      console.log('UPI Number:', upiNumber);
    }
    // Reset form fields after submission
    setPaymentAmount('');
    setPaymentDate('');
    setCreditCardNumber('');
    setUpiNumber('');
  };

  return (
    <div>
        <UserHeader/>
      <div className='payfull'>
      <h2>Payment Page</h2>
      <form onSubmit={handlePaymentSubmit} className='payment-container'>
        <h2>Enter Your Payment Details</h2><br/><br/>
        <div>
          <label>Mode of Payment:</label><br/><br/>
          <div>
            <input
              type="radio"
              id="creditCard"
              name="paymentMode"
              value="Credit Card"
              checked={paymentMode === 'Credit Card'}
              onChange={handlePaymentModeChange}
              required
            />
            <label htmlFor="creditCard">Credit Card</label>
          </div>
          <div>
            <input
              type="radio"
              id="upi"
              name="paymentMode"
              value="UPI"
              checked={paymentMode === 'UPI'}
              onChange={handlePaymentModeChange}
              required
            />
            <label htmlFor="upi">UPI</label>
          </div>
          <div>
            <input
              type="radio"
              id="netBanking"
              name="paymentMode"
              value="Net Banking"
              checked={paymentMode === 'Net Banking'}
              onChange={handlePaymentModeChange}
              required
            />
            <label htmlFor="netBanking">Net Banking</label>
          </div>
        </div>
        {paymentMode === 'Credit Card' && (
          <div><br/>
            <label>Credit Card Number:</label><br/><br/>
            <input
              type="text"
              value={creditCardNumber}
              placeholder='Enter Card Number'
              onChange={(e) => setCreditCardNumber(e.target.value)}
              required
            /><br/>
            <label>Expiry Date</label><br/><br/>
            <input
              type="date"
              value={expirydate}
              placeholder='Enter Expiry Date'
              onChange={(e) => setExpirydate(e.target.value)}
              required
            /><br/>
            <label>CVV</label><br/><br/>
            <input
              type="text"
              value={cvv}
              placeholder='Enter CVV Number'
              onChange={(e) => setCvv(e.target.value)}
              required
            />
            
          </div>
        )}
        {paymentMode === 'UPI' && (
          <div><br/>
            <label>UPI Number:</label><br/><br/>
            <input
              type="text"
              value={upiNumber}
              placeholder="Enter UPI Number"
              onChange={(e) => setUpiNumber(e.target.value)}
              required
            />
          </div>
        )}<br/><br/>
        <div>
          <label>Payment Amount:</label><br/><br/>
          <input
            type="number"
            value={paymentAmount}
            placeholder='Enter Total Amount'
            onChange={(e) => setPaymentAmount(e.target.value)}
            required
          />
        </div><br/>
        <div>
          <label>Payment Date:</label><br/><br/>
          <input
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            required
          />
        </div><br/>
        <button className='successbut' type="submit">Submit Payment</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='cancelbut' type="submit">Cancel</button>
      </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Payment;

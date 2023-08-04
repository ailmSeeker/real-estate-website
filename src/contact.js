import React, { useState } from 'react';
import './contact.css';
import formImage from '../src/form.jpg';


function PaymentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentOption, setPaymentOption] = useState('credit_card');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission and send the data to the server or perform any other actions.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Payment Option:', paymentOption);
  };
  
  return (
    <div className="center">
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-md  h-210 w-100" >
    
      <div>
        <label className='font-sans block pb-2'  >
          Name:
          <input
            className='font-sans block pb-2 border-2 border-2 border-gray-500 p-2 rounded-md '
            type="text"
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label className='font-sans block pb-2'>
          Email:
          <input
            type="email"
            className='font-sans block pb-2 border-2 border-2 border-gray-500 p-2 rounded-md '
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
      <label className='font-sans block pb-2'>
          Phone:
          <input
            type="tel"
            placeholder='Enter your phone no.'
            className=' font-sans block pb-2 border-2 border-gray-500 p-2 rounded-md '
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
      <label className='font-sans block pb-2 '>
          Payment Option:
          <select value={paymentOption} onChange={(e) => setPaymentOption(e.target.value)}
           className='font-sans block pb-2 border-gray-500 p-2 rounded-md ' 
                          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank_transfer">Bank Transfer</option>
          </select>
        </label>
      </div>

      <button
      type="submit" 
      className='bg-teal-500 font-sans text-sm text-white py-3 mt-6 rounded-1g w-full'
      >Submit</button>

     <div className='relative flex-1'>

      <image
      alt='form-learn'
      src={formImage}
      fill
      className='object-cover rounded-1g'
      />
     
     </div>

    </form>
    </div>

  );
}

 


export default PaymentForm;


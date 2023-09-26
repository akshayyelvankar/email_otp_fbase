import React, { useState } from 'react';
import { auth } from '../firebase';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
  
    const handleSignup = async () => {
      try {
        // Create an account with email and password
        await auth.createUserWithEmailAndPassword(email, 'password');
  
        // Send an OTP to the user's email
        const actionCodeSettings = {
          url: 'http://localhost:3000', // Replace with your app's URL
          handleCodeInApp: true,
        };
  
        await auth.sendSignInLinkToEmail(email, actionCodeSettings);
        setOtpSent(true);
        alert('OTP sent to your email. Please check your inbox.');
      } catch (error) {
        alert(error.message);
      }
    };
  
    return (
      <div>
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
  
        {otpSent && <p>OTP sent to your email. Check your inbox.</p>}
      </div>
    );
  };
  
  export default Signup;
  
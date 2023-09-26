import React,{useEffect} from "react";
import { auth } from '../firebase';
const EmailVerification = () => {
    useEffect(() => {
      const url = window.location.href;
  
      if (auth.isSignInWithEmailLink(url)) {
        // Get the email from the link
        const email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          alert('Email not found. Please try again.');
          return;
        }
  
        // Sign in the user with email and link
        auth
          .signInWithEmailLink(email, url)
          .then(() => {
            alert('Email verified successfully.');
            // You can redirect the user to a profile page or any other desired page.
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        alert('Invalid or expired link.');
      }
    }, []);
  
    return (
      <div>
        <h2>Email Verification</h2>
        <p>Verifying your email...</p>
      </div>
    );
  };
  
  export default EmailVerification;
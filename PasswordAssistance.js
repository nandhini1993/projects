import React , { useState }from 'react';
import { useNavigate } from "react-router-dom"; // Import navigation hook
import './PasswordAssistance.css'
function PasswordAssistance(){
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleContinue = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert(`An email has been sent to ${email} with further instructions.`);
      navigate("/ResetPassword"); // Navigate to the reset password page
    }

  const handleContinue = (e) => {
        e.preventDefault();
        console.log('Email entered:',email);
        navigate("/ResetPassword");
    };
  }
  return (
     <div className="container">
      <h1>Password assistance</h1>
      <p>Enter the email address or mobile phone number associated with your Amazon account.</p>
      <div className="input-group">
        <label htmlFor="email-or-phone">Email or mobile phone number</label>
        <input type="text" id="email-or-phone" placeholder="@gmail.com" />
      </div>
      <button className="continue-button" onClick={handleContinue}>Continue</button><br></br>
      <h4>Has your email address or mobile phone number changed?
      <p>If you no longer use the e-mail address associated with your Amazon account, you may contact <a href="#">Customer Service</a> for help restoring access to your account.</p>
    </h4>
    
    </div>
  );
};
export default PasswordAssistance;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./amazonsignin.css";
import PasswordAssistance from "./PasswordAssistance";
function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [keepSignedIn, setKeepSignedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ email, password, keepSignedIn });
      navigate("/dashboard");
    };
    const handleForgotPassword = (e) => {
      e.preventDefault();
      console.log({PasswordAssistance});
      navigate("/PasswordAssistance");
  };
    return(
      <div className="signin-container">
        <div className="signin-box">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email (phone for mobile accounts)</label>
              <input type="email" value={email}onChange={(e) => setEmail(e.target.value)}placeholder="Enter email" required/>
          </div>
          <div className="form-group">
            <label>Password</label>
              <input type="password" value={password}onChange={(e) => setPassword(e.target.value)}placeholder="Password"required/>
            <small className="forgot-password">
            <a href="#" onClick={handleForgotPassword}>Forgot your password?</a>
            </small>
            </div>
            <button type="submit" className="signin-button" onClick={()=>navigator("/login")}>Sign In</button>
            <div className="form-group checkbox">
              <label>Keep me signed in. <a href="#">Details</a></label>
            </div>
          </form>
          <div className="create-account">
            <button className="create-button">Create your Amazon account</button>
          </div>
        </div>
      </div>
    );
}
export default SignIn;
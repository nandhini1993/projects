import React, { useState } from "react";
import "./resetpassword.css";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      alert("Password reset successfully!");
    } else {
      alert("Passwords do not match. Please try again.");
    }
}; 

  return (
    <div className="reset-password-container">
      <div className="reset-password-box">
        <h2>Create new password</h2>
        <p>We’ll ask for this password whenever you Sign-In.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="new-password">New password</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
              required
            />
            <small>Passwords must be at least 6 characters.</small>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Re-enter password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              required
            />
          </div>
          <button type="submit" className="reset-password-button">
            Save changes and Sign-In
          </button>
        </form>
      </div>
    </div>
  );
}
export default ResetPassword;

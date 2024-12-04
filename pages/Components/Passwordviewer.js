import React, { useState } from 'react';

const Passwordviewer = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  function showfunc() {
    if (showPassword) {
      setShowPassword(false); // Hide the password
    } else {
      setShowPassword(true); // Show the password
    }
  }

  return (
    <>
      <h1>Password viewer:</h1>
      <input 
        type={showPassword ? 'text' : 'password'} // Conditionally set type
        placeholder="Enter password"
      />
      <button onClick={showfunc}>
        {showPassword ? 'Hide' : 'Show'} {/* Button label toggles */}
      </button>
    </>
  );
};

export default Passwordviewer;

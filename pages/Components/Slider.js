import React, { useState } from 'react';

const Slider = () => {
  const car = ["Maruti", "Baleno", "Alto", "Swift"];
  const [count, setCount] = useState(0); // Initial count as a number

  // Next button functionality
  function nextfunc() {
    if (count < car.length - 1) { // Ensure it doesn't go out of bounds
      setCount(count + 1);
    }
  }

  // Prev button functionality
  function prevfunc() {
    if (count > 0) { // Ensure it doesn't go below 0
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Slider:</h1>

      <div>
        {/* Display the current car */}
        <p>{car[count]}</p>
      </div>

      <button onClick={prevfunc}>Prev</button>
      <button onClick={nextfunc}>Next</button>
    </>
  );
};

export default Slider;

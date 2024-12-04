import React, { useState } from 'react';

const Text = () => {
  const [current, setCurrent] = useState(null);

  // Next button
  const next = () => {
    setCurrent('Roshan');
  };

  // Prev button
  const prev = () => {
    setCurrent('Mishra');
  };
  
  return (
    <>
      <h1>Hide and Show element in React.js:</h1>
      {current && <p>{current}</p>}

      <button onClick={next}>Next</button> 
      <button onClick={prev}>Prev</button>
    </>
  );
}

export default Text;


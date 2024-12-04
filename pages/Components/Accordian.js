import React, { useState } from 'react'

const Accordian = () => {
    const [count , setCount]=useState(false);
    const features = () => {
        setCount(!count)
    };
  return (
    <>
    <h1>Accordian Task</h1>
    <button type='button' onClick={features}>
        {count ? 'hide':'show'}
    </button> 

    { count && (
          <p>My Accordian App</p> 
        )
    }
    </>
  )
}

export default Accordian;
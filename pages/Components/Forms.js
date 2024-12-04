import React, { useState } from 'react'

const Forms = () => {
    const [count , setCount] = useState ("");   //ek input ke liye state 
    const [error , setError] = useState("") ;   //errror dikhane ke liye state

    function handlesubmit () {
        if(count === "") {
            setError("Email is must");
        }
        else{
            setError("");
        }
    }

  return (
    <>
      <h1>Form Validation example 2 :</h1>
      <input 
        type='text' 
        placeholder='email'
        value={count}
        onChange={(e) => setCount (e.target.value)}
      ></input>

      {/* Error message ke liye space reserve */}
      <div style={{ height: '20px', color: 'red' }}>
        {error && <p>{error}</p>}
      </div>

      

      <button type='button' onClick={handlesubmit}>Submit</button>
    </>
  )
}

export default Forms;

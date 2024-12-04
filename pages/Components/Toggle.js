import React, { useState } from "react";

const Toggle = () => {
  const [count , setCount] = useState();

  function myfunction(){
    setCount(!count);
  }
    return (
        <>
          <h1>Props Method:</h1>
          <p>{count}</p>
          {
            <button type="button" onClick={myfunction}>
                {count ? "yes" : "No"}               
            </button>
          } 
        </>
    )
}

export default Toggle;
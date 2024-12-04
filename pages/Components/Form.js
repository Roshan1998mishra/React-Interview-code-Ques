import React, { useState } from 'react'


const Form = () => {
    const [name , setName] = useState ("");
    const [error,setError] = useState("");


    //handlesubmit functionality
     function handlesubmit() {
        if (name===""){
            setError("Name is Required")
        }
        else {
           setError("");
        }
    }

return (
    <>
      <h2>Form Validation:</h2>
      <input
       type='text'
       value={name}
       placeholder='name' 
       onChange = {(e)=> setName(e.target.value)}
      ></input> 
       
       <div>
       {error && <p style={{color: 'red'}}>{error}</p>}

       </div>

      <button onClick={handlesubmit}>Submit</button>
    </>
  )
}

export default Form;

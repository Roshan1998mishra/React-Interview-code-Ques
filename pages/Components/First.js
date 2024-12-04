import React, { useState } from 'react' ;
const First = () => {
    const [count , setCount] = useState (0);
    
    //increment ke liye functionality
    function add (){
        setCount(count+1);
    }

   //decrement ke liye 
   function sub () {
    setCount(count-1);
   }
    return (
        <>
           <h1>Revise counter app</h1>
           <p>Result : {count}</p>
           <button type='button' onClick={add}>Increment</button>
           <button type='button' onClick={sub}>Decrement</button>
        </>
    )
}
export default First;
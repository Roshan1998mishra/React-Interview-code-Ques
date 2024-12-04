import React, { useState } from 'react'

const Searchbox = () => {
   const [count , setCount] = useState("");
   const language = ["C" , "C++" , "Java" , "JavaScript" , "Ruby"];
   
   //filter lagana
   const myfilter = language.filter(item => 
    item.toLocaleLowerCase().includes(count.toLocaleLowerCase())
   )


  return (
    <>
       <h1>OnChange event :</h1>

       <input type='text'
        placeholder = 'search ... '
        value={count}
        onChange={(e) => setCount (e.target.value)}
       ></input>
       <ul>
       {
         myfilter.map((item,index) => (
          <li key={index}>{item}</li>
         ))
       }  

       </ul>
       

    </>
  )
}

export default Searchbox

import React, { useState } from 'react'

const Search = () => {
    const [update , setUpdate] = useState("");
    const name = ["java" , "javascript" , "nodejs"];

    // filter lagana
    const namefilter  =  name.filter(item =>
        item.toLocaleLowerCase().includes(update.toLocaleLowerCase())
    )
  return (
<>

   <h1>Search bar</h1>
   <input type='text' 
   placeholder='search...' 
   value={update}
   onChange={(e)=> setUpdate(e.target.value)}
   ></input>
   
   {namefilter.map((item,index)=>(
    <li key={index}>{item}</li>
   ))}

</>

  )
}
export default Search;

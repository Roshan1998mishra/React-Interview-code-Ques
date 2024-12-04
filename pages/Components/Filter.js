import React, { useState } from "react";
const Filter = () => {
    const [count , setCount] = useState("");
    const name = ["roshan" , "rajan" , "rahul" , "rishi" , "ganesh"];

    //implement Filter

    const myfilter = name.filter(item =>
        item.toLocaleLowerCase().includes(count.toLocaleLowerCase())
    )

    return (
        <>
          <h1>Filter</h1>

          <input
           type="text"
           placeholder="search ..."
           value={count}
           onChange={(e) => setCount(e.target.value)}
          >
          </input>

         {
            myfilter.map((item,index)=> (
                <li key={index}>{item}</li>
            ))
         }


        </>
    )
}

export default Filter ;
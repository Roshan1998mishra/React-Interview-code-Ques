import React, { useState } from 'react';  // Step 1: useState hook ko import kiya

const Searchbar = () => {
    const technology = ["HTML", "HTML5", "JavaScript", "Tailwind-Css", "Bootstrap"];
    
    const [searchTerm, setSearchTerm] = useState('');  // Step 2: searchTerm ke liye state banaya

    // Step 3: city array ko filter karne ka logic banaya
    const filteredCities = technology.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <> 
            <h1>Searchbar in React</h1>
            <input 
                type='text' 
                style={{maxWidth:"280px"}}
                placeholder="Search for a city..."
                value={searchTerm}  // Step 4: Input value ko state se bind kiya
                onChange={(e) => setSearchTerm(e.target.value)}  // Step 5: Input change par state ko update kiya
            />
            
            <ul>
                {filteredCities.map((item,index)=> (  // Step 6: Filtered cities ko render kiya
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Searchbar;

import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';

const Crendering = () => {
    const [loggedin, setLoggedin] = useState(false); // Use boolean instead of string

    return (
        <>
            <h1>Conditional Rendering:</h1>
            {
                loggedin ? <Login /> : <Logout />
            }
            <button onClick={() => setLoggedin(!loggedin)}>
                {loggedin ? "Logout" : "Login"}
            </button>
        </>
    );
}

export default Crendering;

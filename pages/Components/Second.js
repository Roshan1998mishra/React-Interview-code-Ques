import React, { useState } from "react";

const Second = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [pass, setPass] = useState('');
    const [count, setCount] = useState(null);

    // Name ke liye functionality:
    function validateName() {
        if (name === '') {
            setError('Name is required');
        } else {
            setError('');
        }
    }


    // Password ke liye functionality
    function validatePassword() {
        if (password.length < 6) {  // Check for minimum length of 6
            setPass('Password must be at least 6 characters');
        } else {
            setPass('');
        }
    }

    // Button ke liye functionality onSubmit par
    const handleSubmit = (event) => {
        event.preventDefault(); // Default form submission ko prevent karta hai
        validateName(); // Name validation ko call karta hai
        validatePassword(); // Password validation ko call karta hai

        // Agar dono validation pass ho jaye toh form submit karein
        if (!error && !pass) {
            setCount({ name, password }); // Save data in count state
        }
    };

    return (
        <>
            <h1>Form Validation for Name and Password:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                

                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Name error message display */}

                <br />

                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                {pass && <p style={{ color: 'red' }}>{pass}</p>} {/* Password error message display */}

                <button type="submit">Submit</button>
            </form>

            <div style={{ border: '1px solid', width: '500px', height: '140px', marginTop: '20px' }}>
                {count && ( // Check if count is not null
                    <>
                        <p><strong>Name:</strong> {count.name}</p>
                        <p><strong>Password:</strong> {count.password}</p>
                    </>
                )}
            </div>
        </>
    );
};

export default Second;

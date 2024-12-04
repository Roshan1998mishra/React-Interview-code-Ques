import React, { useState } from "react";

const Clear = () => {
  const [text, setText] = useState("Default text"); // Holds the input text

  // Reset button functionality: reset text to the default value
  function resetFunctionality() {
    setText("Default text");
  }

  // Delete button functionality: clear the input field
  function deleteFunctionality() {
    setText("");
  }

  // Edit button functionality: prompt for a new text and set it
  function editFunctionality() {
    const newText = prompt("Enter new text:", text);
    if (newText !== null) {
      setText(newText);
    }
  }

  return (
    <>
      <h1>Functionality: Edit, Delete, Reset</h1>
      <input
        type="text"
        id="data"
        style={{ width: "500px", height: "50px", border: "1px solid" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button type="button" onClick={editFunctionality}>Edit</button>
      <button type="button" onClick={resetFunctionality}>Reset</button>
      <button type="button" onClick={deleteFunctionality}>Delete</button>
    </>
  );
};

export default Clear;

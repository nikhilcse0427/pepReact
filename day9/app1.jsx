import React, { useState, useRef } from "react";

function App() {
  // State for controlled input
  const [controlledValue, setControlledValue] = useState("");

  // Ref for uncontrolled input
  const uncontrolledInputRef = useRef(null);

  // Handle button click with argument passing
  const handleButtonClick = (label) => {
    console.log(`Button clicked: ${label}`);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission prevented");
  };

  // Handle parent and child clicks (event bubbling/propagation)
  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // Stop event propagation
    console.log("Child clicked");
  };

  // Handle controlled input change
  const handleControlledChange = (e) => {
    setControlledValue(e.target.value);
  };

  // Handle uncontrolled input
  const handleUncontrolledSubmit = () => {
    console.log("Uncontrolled Input Value:", uncontrolledInputRef.current.value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Event Handling Examples</h1>

      {/* 1. Passing Arguments to Event Handlers */}
      <section>
        <h2>1. Passing Arguments to Event Handlers</h2>
        <button onClick={() => handleButtonClick("Button 1")}>Click Me</button>
      </section>

      {/* 2. Preventing Default Behavior */}
      <section>
        <h2>2. Preventing Default Behavior</h2>
        <form onSubmit={handleFormSubmit}>
          <button type="submit">Submit Form</button>
        </form>
      </section>

      {/* 3. Event Bubbling and Propagation */}
      <section>
        <h2>3. Event Bubbling and Propagation</h2>
        <div onClick={handleParentClick} style={{ border: "1px solid black", padding: "10px" }}>
          Parent (Click Anywhere Here)
          <button
            onClick={handleChildClick}
            style={{ marginLeft: "10px", padding: "5px", cursor: "pointer" }}
          >
            Child Button
          </button>
        </div>
      </section>

      {/* 4. Controlled vs. Uncontrolled Inputs */}
      <section style={{ marginTop: "20px" }}>
        <h2>4. Controlled vs. Uncontrolled Inputs</h2>

        {/* Controlled Input */}
        <div>
          <label>
            Controlled Input:
            <input
              type="text"
              value={controlledValue}
              onChange={handleControlledChange}
              placeholder="Type here..."
              style={{ marginLeft: "10px" }}
            />
          </label>
          <p>Value: {controlledValue}</p>
        </div>

        {/* Uncontrolled Input */}
        <div style={{ marginTop: "10px" }}>
          <label>
            Uncontrolled Input:
            <input
              type="text"
              ref={uncontrolledInputRef}
              placeholder="Type something here..."
              style={{ marginLeft: "10px" }}
            />
          </label>
          <button
            onClick={handleUncontrolledSubmit}
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            Log Input
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

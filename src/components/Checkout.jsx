import React, { useState, useRef, useEffect } from "react";
import Button from "./shared/Button";
function Checkout() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");
  const [btnDisabled, setBtnDisable] = useState(true);
  const inputRef = useRef(null); //NO NEED

  // Focus the input field on component mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const newValue = e.target.value; // Get the new value from the event
    setInputValue(newValue);
    setBtnDisable(newValue === "");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors
    setResult(0);

    try {
      const response = await fetch("http://localhost:5007/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="rules-checker">
      <form onSubmit={handleSubmit}>
        <label>Enter Products :</label>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type="submit" isDisabled={btnDisabled}>
          Submit
        </Button>
      </form>

      <div className="result-block">
        {!error && <div>Total : {JSON.stringify(result)}</div>}
        {error && <div className="error">Error : {error}</div>}
      </div>
    </div>
  );
}

export default Checkout;

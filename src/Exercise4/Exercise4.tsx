import React, { useState } from "react";

//Knowledge to learn to pass this exercise:
// 1. useState variable
// 2. how to update useState variable
// 3. onChange event

//Explanation: Want to show the sum and difference of two numbers entered by the user

const Exercise3: React.FC = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  return (
    <div>
      <h1>Exercise 3</h1>

      <div>
        <input type="number" value={number1} placeholder="Enter first number" />
        <input
          type="number"
          value={number2}
          placeholder="Enter second number"
        />
        <button>show Result</button>
      </div>

      <div>
        <p>Sum: {/* Add the sum here */}</p>
        <p>Difference: {/* Add the difference here */}</p>
      </div>
    </div>
  );
};

export default Exercise3;

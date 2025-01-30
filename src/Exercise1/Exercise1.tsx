import React, { useState } from "react";

//Knowledge to learn to pass this exercise:
// 1. useState variable
// 2. how to update useState variable
// 3. onClick event

//Explanation: Create a counter that increments, decrements and resets

const Exercise1: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Exercise 1</h1>
      <h2>Counter: {count}</h2>

      {/* When the + button is pressed the count number should increase by 1 */}
      <button>+</button>
      {/* When the - button is pressed the count number should decrease by 1 */}
      <button>-</button>
      {/* When the reset button is pressed the count number should reset to 0 */}
      <button>Reset</button>
    </div>
  );
};

export default Exercise1;

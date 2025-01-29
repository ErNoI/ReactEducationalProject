import React, { useState } from "react";

//Knowledge to learn to pass this exercise:
// 1. useState variable
// 2. how to update useState variable
// 3. onChange event

//Explanation: Want to show what user writes in the input field in the div below

const Exercise2: React.FC = () => {
  // Update this state varible to match the text of the input field
  const [userInput, setUserInput] = useState<string>("");

  return (
    <div>
      <h1>Exercise 2</h1>

      <input type="text" />
      {/* save what is written in this input to userInput variable */}
      <div>userinput: {userInput}</div>
    </div>
  );
};

export default Exercise2;

import React from "react";

//Knowledge to learn to pass this exercise:
// 1. useState variable
// 2. how to update useState variable
// 3. onClick event
// 4. inline style

//Explanation: When the Red button is pressed the div should turn red, when the Blue button is pressed the div should turn blue and when the Green button is pressed the div should turn green

const Exercise4: React.FC = () => {
  //add usestate variable here

  return (
    <div>
      <h1>Exercise 3</h1>;<button>Red</button>
      <button>Blue</button>
      <button>Green</button>
      <div
        style={{
          backgroundColor: "yellow", // change the string to the useState variable
          width: "100px",
          height: "100px",
          marginTop: "10px",
        }}
      ></div>
    </div>
  );
};

export default Exercise4;

import React from "react";

//Knowledge to learn to pass this exercise:
// 1. useState variable
// 2. how to update useState variable
// 3. onClick event
// 4. inline style

const Exercise4: React.FC = () => {
  return (
    <div>
      <button>Red</button>

      <button>Blue</button>

      <button>Green</button>

      <div
        style={{
          backgroundColor: "yellow",
          width: "100px",
          height: "100px",
          marginTop: "10px",
        }}
      ></div>
    </div>
  );
};

export default Exercise4;

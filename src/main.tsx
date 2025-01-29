import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Exercise1 from "./Exercise1/Exercise1";
import Exercise2 from "./Exercise2/Exercise2";
import Exercise3 from "./Exercise3/Exercise3";
import Exercise4 from "./Exercise4/Exercise4";

export const App = () => {
  const [selectedExercise, setSelectedExercise] = useState<number>(1);

  const renderExercise = () => {
    switch (selectedExercise) {
      case 1:
        return <Exercise1 />;
      case 2:
        return <Exercise2 />;
      case 3:
        return <Exercise3 />;
      case 4:
        return <Exercise4 />;
      default:
        return <Exercise1 />;
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setSelectedExercise(1)}>Exercise 1</button>
        <button onClick={() => setSelectedExercise(2)}>Exercise 2</button>
        <button onClick={() => setSelectedExercise(3)}>Exercise 3</button>
        <button onClick={() => setSelectedExercise(4)}>Exercise 4</button>
      </div>

      {renderExercise()}
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

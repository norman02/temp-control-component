import "./App.css";
import React, { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState(0);

  const decreaseTemperature = () => {
    setTemperature((prev) => prev - 1);
  };

  const increaseTemperature = () => {
    setTemperature(prev=> prev + 1)
  }

  return (
    <div className="app">
      <div className="temperature-component">
        <div className="temperature-display">
          <p>{temperature}</p>
        </div>
        <div className="temperature-controls">
          <button onClick={decreaseTemperature}>-</button>
          <button onClick={increaseTemperature}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Styles } from "../Styles";

function Temperature() {
  const [temperature, setTemperature] = useState(0);

  const decreaseTemperature = () => {
    setTemperature((prev) => prev - 1);
  };

  const increaseTemperature = () => {
    setTemperature(prev=> prev + 1)
  }

  return (
    <div style={Styles.app}>
      <div style={Styles.temperatureComponent}>
        <div style={Styles.temperatureDisplay}>
          <p>{temperature}</p>
        </div>
        <div style={Styles.temperatureControls}>
          <button style={Styles.button} onClick={decreaseTemperature}>-</button>
          <button style={Styles.button} onClick={increaseTemperature}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Temperature;

import React from "react";
import { Styles } from "../Styles";

const Controls = (props) => {
  return (
    <div style={Styles.temperatureControls}>
      <button style={Styles.button} onClick={props.decreaseTemperature}>
        -
      </button>
      <button style={Styles.button} onClick={props.increaseTemperature}>
        +
      </button>
    </div>
  );
};

export default Controls;

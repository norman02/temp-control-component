import React from "react";
import { Styles } from "../Styles";

const Display = (props) => {
  return (
    <div style={Styles.temperatureDisplay}>
      <p>{props.temperature}</p>
    </div>
  );
};

export default Display;

import React, { useState } from "react";
import { Styles } from "./Styles";
import Display from "./components/Display";
import Controls from "./components/Constrols";
function App() {
  const [temperature, setTemperature] = useState(0);

  const decreaseTemperature = () => {
    setTemperature((prev) => prev - 1);
  };

  const increaseTemperature = () => {
    setTemperature((prev) => prev + 1);
  };

  return (
    <div style={Styles.app}>
      <div style={Styles.temperatureComponent}>
        <Display temperature={temperature} />
        <Controls
          increaseTemperature={increaseTemperature}
          decreaseTemperature={decreaseTemperature}
        />
      </div>
    </div>
  );
}

export default App;

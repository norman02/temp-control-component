import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="temperature-component">
        <div className="temperature-display">
          <p>0</p>
        </div>
        <div className="temperature-controls">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;

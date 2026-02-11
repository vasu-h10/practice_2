import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  console.log("App rendered");

  return (
    <div className="app">
      <h2>React Re-render Example</h2>

      {/* State → re-render */}
      <div className="card">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      {/* State → className change */}
      <div
        className={`box ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        Click to change color
      </div>
    </div>
  );
}
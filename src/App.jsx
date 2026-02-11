import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [text, setText] = useState("");
  const [scrollY, setScrollY] = useState(0);

  console.log("🔄 App re-rendered");

  return (
    <div className="app">
      <h2>React Events – One File</h2>

      {/* Click */}
      <button onClick={() => setCount(count + 1)}>
        Click (+): {count}
      </button>

      {/* Double click */}
      <button onDoubleClick={() => setCount(count - 1)}>
        Double Click (-)
      </button>

      {/* Hover */}
      <div
        className={hovered ? "box active" : "box"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Hover me
      </div>

      {/* Toggle */}
      <button onClick={() => setEnabled(!enabled)}>
        Toggle: {enabled ? "ON" : "OFF"}
      </button>

      {/* Input */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
      <p>You typed: {text}</p>

      {/* Scroll */}
      <div
        className="scrollBox"
        onScroll={(e) => setScrollY(e.target.scrollTop)}
      >
        <div className="scrollContent">Scroll inside me</div>
      </div>
      <p>Scroll Y: {scrollY}px</p>

      {/* Keyboard */}
      <input
        placeholder="Press Enter"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            alert("Enter key pressed");
          }
        }}
      />
    </div>
  );
}
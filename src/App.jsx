import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [text, setText] = useState("");
  const [scroll, setScroll] = useState(0);
  const [horizontal, setHorizontal] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  console.log("🔄 Re-render");

  return (
    <div className="app">
      <h2>All Events – One Interface</h2>

      {/* CLICK + TOGGLE */}
      <section>
        <h4>Click / Toggle</h4>
        <button onClick={() => setCount(count + 1)}>+ Click</button>
        <button onClick={() => setCount(count - 1)}>- Click</button>
        <p>Count: {count}</p>

        <button onClick={() => setLiked(!liked)}>
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </section>

      {/* HOVER */}
      <section>
        <h4>Hover (works now)</h4>
        <div
          className={liked ? "card active" : "card"}
          onMouseEnter={() => setLiked(true)}
          onMouseLeave={() => setLiked(false)}
        >
          Hover me
        </div>
      </section>

      {/* INPUT */}
      <section>
        <h4>Input</h4>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here"
        />
        <p>Typed: {text}</p>
      </section>

      {/* KEYBOARD */}
      <section>
        <h4>Keyboard</h4>
        <input
          placeholder="Press Enter"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              alert("Enter pressed");
            }
          }}
        />
      </section>

      {/* SCROLL + CHILD LAYOUTS */}
      <section>
        <h4>Parent → Child Scroll (Boxes)</h4>

        <button onClick={() => setHorizontal(!horizontal)}>
          {horizontal ? "Vertical Scroll" : "Horizontal Scroll"}
        </button>

        <div
          className={`scrollBox ${horizontal ? "horizontal" : "vertical"}`}
          onScroll={(e) => setScroll(e.target.scrollTop)}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={
                hoveredIndex === i ? "card active" : "card"
              }
              style={{
                width: "80px",
                height: "80px",
                margin: "10px",
                flexShrink: 0,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              Box {i + 1}
            </div>
          ))}
        </div>

        <p>Scroll position: {scroll}px</p>
      </section>
    </div>
  );
}
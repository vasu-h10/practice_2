import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [text, setText] = useState("");
  const [scroll, setScroll] = useState(0);
  const [horizontal, setHorizontal] = useState(false);

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
        <h4>Hover</h4>
        <div className={liked ? "card active" : "card"}>
          Hover / Toggle color
        </div>
      </section>

      {/* INPUT + CHANGE */}
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
        <h4>Parent → Child Scroll Layout</h4>

        <button onClick={() => setHorizontal(!horizontal)}>
          {horizontal ? "Vertical Scroll" : "Horizontal Scroll"}
        </button>

        <div
          className={`scrollBox ${horizontal ? "horizontal" : "vertical"}`}
          onScroll={(e) => setScroll(e.target.scrollTop)}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="scrollContent" key={i}>
              Child {i + 1}
            </div>
          ))}
        </div>

        <p>Scroll position: {scroll}px</p>
      </section>
    </div>
  );
}
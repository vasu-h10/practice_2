import { useState } from "react";

export default function HookRerender() {
  const [count, setCount] = useState(0);

  console.log("HookRerender rendered");

  return (
    <div style={{ padding: 20 }}>
      <h3>Hook re-render demo</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
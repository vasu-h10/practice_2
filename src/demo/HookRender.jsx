import { useState } from "react";

export default function HookRerender() {
  const [count, setCount] = useState(0);

  console.log("HookRerender rendered");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

import { useState } from "react";
import "./box.css";

export default function ClassnameChange() {
  const [active, setActive] = useState(false);

  console.log("ClassnameChange rendered");

  return (
    <div
      className={active ? "red" : "blue"}
      onClick={() => setActive(!active)}
    >
      Click me
    </div>
  );
}

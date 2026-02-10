function Child() {
  console.log("Child rendered");
  return <p>Child component</p>;
}

export default function ParentRerender() {
  const [n, setN] = useState(0);

  console.log("Parent rendered");

  return (
    <div>
      <button onClick={() => setN(n + 1)}>Parent +</button>
      <Child />
    </div>
  );
}

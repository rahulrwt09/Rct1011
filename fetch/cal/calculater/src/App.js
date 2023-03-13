import cal  from "./component/cal";

const { add, sub, mul, div }= cal
export default function App() {
  return (
    <div className="App">
      <ul>
        <li>sum of two number {add(1, 5)}</li>
        <li>sub of two number {sub(1, 5)}</li>
        <li>div two number    {mul(1, 5)}</li>
        <li>mul of two number {div(16, 5)}</li>
      </ul>
    </div>
  );
}

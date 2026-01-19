import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{count}</h2>
      <div className="count">
        <button
          className="kurang"
          onClick={() => setCount((count) => count - 1)}
        >
          Kurang
        </button>
        <button
          className="tambah"
          onClick={() => setCount((count) => count + 1)}
        >
          Tambah
        </button>
      </div>
    </>
  );
};

export default Counter;

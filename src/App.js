import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);
  // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  const valueUpdate = (newValue) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newValue);
      }, 1000);
    });
  };

  const increment = async () => {
    setIsUpdating(true);
    result = await valueUpdate(count + 1);

    setCount(result);
    setIsUpdating(false);
  };

  const decrement = async () => {
    if (count > 0) {
      setIsUpdating(true);
      result = await valueUpdate(count - 1);
      setCount(result);
      setIsUpdating(false);
    }
  };

  return (
    <div className="App">
      {/* Show a loader or fade the text while updating */}
      <h1 style={{ opacity: isUpdating ? 0.5 : 1 }}>
        {isUpdating ? "..." : count}
      </h1>

      <button onClick={increment} disabled={isUpdating}>
        {isUpdating ? "Updating..." : "Increment"}
      </button>

      <button onClick={decrement} disabled={isUpdating || count === 0}>
        Decrement
      </button>

      <br />
      <span>{count === 0 && !isUpdating ? "You reached 0" : ""}</span>
    </div>
  );
}

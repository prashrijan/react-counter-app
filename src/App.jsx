import React from "react";
import { useState } from "react";
import Button from "./Components/Button";

const App = () => {
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };
  let [count, setCount] = useState(0);
  return (
    <div className="wrapper h-screen w-full bg-slate-800 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-semibold ">Count: {count}</h1>
      <div className="buttons flex gap-3 mt-6">
        <Button text="Increase" color="green" doSomething={handleIncrease} />
        <Button text="Reset" color="black" doSomething={handleReset} />
        <Button
          text="Decrease"
          color="red"
          doSomething={handleDecrease}
          disabled={count === 0}
        />
      </div>
    </div>
  );
};

export default App;

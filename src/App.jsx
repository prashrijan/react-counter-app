import React from "react";
import { useState } from "react";
import Button from "./Components/Button";

const App = () => {
  let [count, setCount] = useState(0);
  return (
    <div className="wrapper h-screen w-full bg-slate-800 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-semibold ">Count: {count}</h1>
      <div className="buttons flex gap-3 mt-6">
        <Button text="Increase" color="green" />
        <Button text="Reset" color="black" />
        <Button text="Decrease" color="red" />
      </div>
    </div>
  );
};

export default App;

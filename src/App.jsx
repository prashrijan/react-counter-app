import React from "react";
import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  return (
    <div className="wrapper h-screen w-full bg-slate-800 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-semibold ">Count: {count}</h1>
      <div className="buttons flex gap-3">
        <div className="button">Btn1</div>
        <div className="button">Btn2</div>
        <div className="button">Btn3</div>
      </div>
    </div>
  );
};

export default App;

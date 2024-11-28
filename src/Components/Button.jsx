import React from "react";

const Button = ({ text, color, doSomething, disabled }) => {
  return (
    <button
      className="px-5 text-white text-xl font-medium py-3 rounded-full shadow-lg"
      style={{ backgroundColor: color }}
      onClick={doSomething}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

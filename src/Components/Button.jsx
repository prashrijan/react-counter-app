import React from "react";

const Button = ({ text, color }) => {
  return (
    <button
      className="px-5 text-white text-xl font-medium py-3 rounded-full shadow-lg"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;

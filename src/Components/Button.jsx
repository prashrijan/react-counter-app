import React from "react";

const Button = ({ text, color, onClick, disabled }) => {
  return (
    <button
      className="text-xl text-white px-5 py-3 rounded-full shadow-2xl"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

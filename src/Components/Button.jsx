import React from "react";

const Button = ({ text, color, doSomething, disabled }) => {
  const buttonColors = {
    green: "bg-green-500 hover:bg-green-600 active:bg-green-700",
    red: "bg-red-500 hover:bg-red-600 active:bg-red-700",
    black: "bg-black hover:bg-gray-700 active:bg-gray-900",
  };

  const colorClass = disabled
    ? "bg-gray-300 cursor-not-allowed"
    : buttonColors[color] || "bg-gray-500";

  return (
    <button
      className={`px-5 text-white text-xl font-medium py-3 rounded-full shadow-lg transition ease-in-out 
        hover:-translate-y-1 hover:scale-110 duration-200 ${colorClass}`}
      onClick={doSomething}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import "../styles/button.css";

const Button = ({ type, id, className, label }) => {
  return (
    <button type={type} id={id} className={className}>
      {label}
    </button>
  );
};

export default Button;

import React from "react";

function Button({ bgColor, text, onClick, size, color, ...props }) {
  return (
    <button style={{ background: bgColor, color: color }} className={size} onClick={onClick} {...props}>
      {text}
    </button>
  );
}

export default Button;

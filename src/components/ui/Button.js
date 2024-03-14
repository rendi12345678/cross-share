import React from "react";

function Button({ bgColor, text, onClick, ...props }) {
  return (
    <button style={{ background: bgColor }} onClick={onClick} {...props}>
      {text}
    </button>
  );
}

export default Button;

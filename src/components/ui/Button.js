import React from "react";

function Button({ children, bgColor, onClick = null }) {
  return (
    <button style={{ background: bgColor }} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

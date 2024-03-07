import React from "react";

function Button({ children, bgColor }) {
  return <button style={{ background: bgColor }}>{children}</button>;
}

export default Button;

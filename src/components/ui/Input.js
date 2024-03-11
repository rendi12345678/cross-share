import React from "react";

function Input({ name, type, label }) {
  return (
    <>
      <label htmlFor={name}>
        {label} <br />
        <input type={type} id={name} name={name} />
      </label>
      <br />
    </>
  );
}

export default Input;

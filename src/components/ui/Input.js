import React from "react";

function Input({ name, type, label }) {
  return (
    <>
      <label htmlFor={name} className={name}>
        {label} <br />
        <input type={type} id={name} name={name} />
      </label>
    </>
  );
}

export default Input;

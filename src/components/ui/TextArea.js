import React from "react";

function TextArea({ name, label }) {
  return (
    <>
      <label htmlFor={name} className={name}>
        {label} <br />
        <textarea id={name} name={name}></textarea>
      </label>
    </>
  );
}

export default TextArea;

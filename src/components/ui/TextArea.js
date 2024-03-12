import React, { forwardRef } from "react";

const TextArea = forwardRef(({ name, label }, ref) => {
  return (
    <>
      <label htmlFor={name} className={name}>
        {label} <br />
        <textarea id={name} name={name} ref={ref}></textarea>
      </label>
    </>
  );
});

export default TextArea;

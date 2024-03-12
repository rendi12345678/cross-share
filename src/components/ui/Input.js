import React, { forwardRef } from "react";

const Input = forwardRef(({ name, type, label, accept }, ref) => {
  return (
    <>
      <label htmlFor={name} className={name}>
        {label} <br />
        <input type={type} id={name} name={name} ref={ref} accept={accept} />
      </label>
    </>
  );
});

export default Input;

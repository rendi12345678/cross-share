import React from "react";

function Select({ children, onChange, label }) {
  return (
    <label>
      {label} : &nbsp;
      <select onChange={onChange}>{children}</select>
    </label>
  );
}

function Option({ children }) {
  return <option>{children}</option>;
}

Select.Option = Option;

export default Select;

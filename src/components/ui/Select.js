import React from "react";

function Select({ children, onChange }) {
  return (
    <label htmlFor="">
      Choose Platform : &nbsp;
      <select onChange={onChange}>{children}</select>
    </label>
  );
}

function Option({ children }) {
  return <option>{children}</option>;
}

Select.Option = Option;

export default Select;

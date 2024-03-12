import React from "react";
import Select from "./ui/Select";

function ChoosePlatform({ handleOnChange }) {
  return (
    <Select onChange={handleOnChange} label="Choose Platform">
      <Select.Option key="1">Youtube</Select.Option>
      <Select.Option key="2">X / Twitter</Select.Option>
    </Select>
  );
}

export default ChoosePlatform;

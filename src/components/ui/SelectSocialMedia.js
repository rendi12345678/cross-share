import React from "react";
import useSelectSocialMedia from "../../hooks/useSelectSocialMedia";
import Select from "./Select";

function SelectSocialMedia() {
  const { handleOnChange } = useSelectSocialMedia();

  return (
    <h3>
      Posts
      <Select onChange={handleOnChange}>
        <Select.Option key="1">Youtube</Select.Option>
        <Select.Option key="2">X / Twitter</Select.Option>
      </Select>
    </h3>
  );
}

export default SelectSocialMedia;

import React from "react";
import Select from "../components/ui/Select";
import useSelectSocialMedia from "../hooks/useSelectSocialMedia";

function SelectSocialMedia() {
  const { handleOnChange } = useSelectSocialMedia();

  return (
    <h3>
      Posts &nbsp;{" "}
      <Select onChange={handleOnChange}>
        <Select.Option key="1">Youtube</Select.Option>
        <Select.Option key="2">X / Twitter</Select.Option>
      </Select>
    </h3>
  );
}

export default SelectSocialMedia;

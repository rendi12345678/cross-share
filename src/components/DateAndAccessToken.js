import React from "react";
import useContextHook from "../hooks/useContextHook";
import Input from "./ui/Input";

function DateAndAccessToken() {
  const { uploadScheduleRef, accessTokenRef } = useContextHook();

  return (
    <div className="date-and-access-token">
      <Input
        type="date"
        name="date"
        label="Upload Schedule"
        ref={uploadScheduleRef}
      />
      <Input
        type="text"
        name="access-token"
        label="Access Token"
        ref={accessTokenRef}
      />
    </div>
  );
}

export default DateAndAccessToken;

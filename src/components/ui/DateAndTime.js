import React from "react";
import useContextHook from "../../hooks/useContextHook";
import Input from "./Input";

function DateAndTime() {
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
        type="date-time"
        name="time"
        label="Time"
        ref={accessTokenRef}
      />
    </div>
  );
}

export default DateAndTime;

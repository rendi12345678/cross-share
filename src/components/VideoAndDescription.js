import React from "react";
import useContextHook from "../hooks/useContextHook";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";

function VideoAndDescription() {
  const { youtubeVideoRef, descriptionRef } = useContextHook();

  return (
    <div className="video-and-description">
      <Input
        type="file"
        name="video"
        label="Choose Video"
        ref={youtubeVideoRef}
        accept="video/*"
      />
      <TextArea name="description" label="description" ref={descriptionRef} />
    </div>
  );
}

export default VideoAndDescription;

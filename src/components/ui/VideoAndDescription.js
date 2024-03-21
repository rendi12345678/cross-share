import React from "react";
import useContextHook from "../../hooks/useContextHook";
import Input from "./Input";
import TextArea from "./TextArea";

function VideoAndDescription() {
  const { youtubeVideoRef, descriptionRef } = useContextHook();

  return (
    <div className="video-and-description">
      <TextArea name="description" label="description" ref={descriptionRef} />
      <Input
        type="file"
        name="video"
        label=""
        ref={youtubeVideoRef}
        accept="video/*"
      />
    </div>
  );
}

export default VideoAndDescription;

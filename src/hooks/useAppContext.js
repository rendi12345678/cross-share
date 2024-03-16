import { useRef, useState } from "react";

function useAppContext() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const accessTokenRef = useRef(null);
  const youtubeVideoRef = useRef(null);
  const uploadScheduleRef = useRef(null);
  const modalRef = useRef(null);
  const [activeLayout, setActiveLayout] = useState("dashboard");
  let url = "http://localhost:5000";

  const contextValue = {
    titleRef,
    descriptionRef,
    accessTokenRef,
    youtubeVideoRef,
    uploadScheduleRef,
    modalRef,
    activeLayout,
    setActiveLayout,
    url,
  };

  return {contextValue};
}

export default useAppContext;

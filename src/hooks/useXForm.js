import useContextHook from "./useContextHook";

function useXForm() {
  const {
    titleRef,
    descriptionRef,
    accessTokenRef,
    youtubeVideoRef,
    uploadScheduleRef,
  } = useContextHook();
  
  const refs = [
    {
      name: "title",
      ref: titleRef,
    },
    {
      name: "description",
      ref: descriptionRef,
    },
    {
      name: "accessToken",
      ref: accessTokenRef,
    },
    {
      name: "uploadSchedule",
      ref: uploadScheduleRef,
    },
    {
      name: "youtubeVideo",
      ref: youtubeVideoRef,
    },
  ];

  return refs;
}

export default useXForm;

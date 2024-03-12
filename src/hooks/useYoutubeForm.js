import useAxios from "./useAxios";
import useContextHook from "./useContextHook";

function useYoutubeForm() {
  const {
    titleRef,
    descriptionRef,
    accessTokenRef,
    youtubeVideoRef,
    uploadScheduleRef,
  } = useContextHook();
  const { postData } = useAxios();

  const handleYoutubeFormSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/upload-youtube-video`;
    const formData = new FormData();
    formData.append("title", titleRef?.current.value);
    formData.append("description", descriptionRef?.current.value);
    formData.append("accessToken", accessTokenRef?.current.value);
    formData.append("uploadSchedule", uploadScheduleRef?.current.value);
    formData.append("youtubeVideo", youtubeVideoRef?.current.files[0]);

    try {
      const data = await postData(url, formData);
      console.log(`Data : ${data}`);
    } catch (err) {
      console.log(`Error post data to server : ${err}`);
    }
  };

  return { handleYoutubeFormSubmit };
}

export default useYoutubeForm;

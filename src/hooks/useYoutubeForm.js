import { useState } from "react";
import useAxios from "./useAxios";
import useContextHook from "./useContextHook";
import useCreateNewPost from "./useCreateNewPost";

function useYoutubeForm() {
  const {
    titleRef,
    descriptionRef,
    accessTokenRef,
    youtubeVideoRef,
    uploadScheduleRef,
  } = useContextHook();
  const { closeModal } = useCreateNewPost();
  const { postData } = useAxios();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
      setIsLoading(true);
      const data = await postData(url, formData);
      if (!data.success) return setIsError(true);
      console.log(`Message : ${data.message}`);
      closeModal();
      setIsError(false);
    } catch (err) {
      setIsError(true);
      console.log(`Error post data to server : ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleYoutubeFormSubmit, isLoading };
}

export default useYoutubeForm;

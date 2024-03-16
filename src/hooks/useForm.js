import { useState } from "react";
import useAxios from "./useAxios";
import useContextHook from "./useContextHook";
import useYoutubeForm from "./useYoutubeForm";

function useForm({ formType }) {
  const { postData } = useAxios();
  const { closeModal } = useContextHook();
  const youtubeFormRefs = useYoutubeForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const refs = formType === "Youtube" ? youtubeFormRefs : [];
  const endpoint = formType === "Youtube" ? "/upload-youtube-video" : "/upload-x-file";

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    refs.map(({ name, ref }) => {
      return formData.append(name, ref.current.value);
    });

    console.log(formData);

    try {
      setIsLoading(true);
      const data = await postData(endpoint, formData);
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

  return { handleSubmitForm, isLoading, isError };
}

export default useForm;

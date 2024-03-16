import { useState } from "react";
import useForm from "./useForm";

function useSelectSocialMedia() {
  const [platform, setPlatform] = useState("Youtube");
  const { handleSubmitForm } = useForm({ formType: platform });

  const handleOnChange = (e) => {
    setPlatform(e.target.value);
  };

  return { handleOnChange, platform, handleSubmitForm };
}

export default useSelectSocialMedia;

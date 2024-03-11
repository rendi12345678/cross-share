import { useState } from "react";

function useSelectSocialMedia() {
  const [platform, setPlatform] = useState("Youtube");

  const handleOnChange = (e) => {
    setPlatform(e.target.value);
    console.log(`Platform : ${platform}`);
  };

  return { handleOnChange, platform };
}

export default useSelectSocialMedia;

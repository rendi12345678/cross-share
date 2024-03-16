import Input from "../components/ui/Input";
import VideoAndDescription from "../components/ui/VideoAndDescription";
import useContextHook from "./useContextHook";

function useCreateNewPost() {
  const { titleRef, modalRef } = useContextHook();
  let timeout;

  const closeModal = () => {
    setOpacityElement(modalRef.current, "0");
    timeout = setTimeout(() => {
      setDisplayElement(modalRef.current, "none");
      clearTimeout(timeout);
    }, 500);
  };

  const openModal = async () => {
    setDisplayElement(modalRef.current, "flex");
    timeout = setTimeout(() => {
      setOpacityElement(modalRef.current, "1");
      clearTimeout(timeout);
    }, 100);
  };

  const setDisplayElement = (element, value) => {
    element.style.display = value;
  };

  const setOpacityElement = (element, value) => {
    element.style.opacity = value;
  };

  const renderInputFields = (platform) => {
    if (platform === "Youtube")
      return (
        <>
          <Input type="text" name="title" label="Title" ref={titleRef} />
          <VideoAndDescription />
        </>
      );
    return <Input type="text" name="title" label="Title" ref={titleRef} />;
  };

  return { renderInputFields, closeModal, openModal };
}

export default useCreateNewPost;

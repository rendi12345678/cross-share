import VideoAndDescription from "../components/VideoAndDescription";
import Input from "../components/ui/Input";
import useContextHook from "./useContextHook";

function useCreateNewPost() {
  const { titleRef, modalRef } = useContextHook();

  const closeModal = () => {
    setDisplayElement(modalRef.current, "none");
  };

  const openModal = () => {
    setDisplayElement(modalRef.current, "flex");
  };

  const setDisplayElement = (element, value) => {
    element.style.display = value;
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

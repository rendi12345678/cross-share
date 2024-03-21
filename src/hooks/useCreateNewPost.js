import Input from "../components/ui/Input";
import VideoAndDescription from "../components/ui/VideoAndDescription";
import useContextHook from "./useContextHook";

function useCreateNewPost() {
  const { titleRef, modalRef, isOpenModal, setIsOpenModal } = useContextHook();
  let timeout;

  const closeModal = () => {
    setIsOpenModal({ createNewPost: false });
  };

  const openModal = () => {
    setIsOpenModal({ createNewPost: true });
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

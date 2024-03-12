import React from "react";
import useCreateNewPost from "../hooks/useCreateNewPost";
import useSelectSocialMedia from "../hooks/useSelectSocialMedia";
import useYoutubeForm from "../hooks/useYoutubeForm";
import CreateNewPostModal from "./CreateNewPostModal";
import SelectSocialMedia from "./SelectSocialMedia";
import Button from "./ui/Button";

function CreateNewPostHeader() {
  const { openModal, renderInputFields, closeModal } = useCreateNewPost();
  const { handleOnChange, platform } = useSelectSocialMedia();
  const { handleYoutubeFormSubmit, isLoading } = useYoutubeForm();

  return (
    <header>
      {isLoading ? <span className="loader"></span> : null}
      <SelectSocialMedia />
      <Button bgColor="var(--accent-color)" onClick={openModal}>
        Create New Post
      </Button>
      <CreateNewPostModal
        renderInputFields={renderInputFields}
        handleOnChange={handleOnChange}
        platform={platform}
        handleYoutubeFormSubmit={handleYoutubeFormSubmit}
        closeModal={closeModal}
      />
    </header>
  );
}

export default CreateNewPostHeader;

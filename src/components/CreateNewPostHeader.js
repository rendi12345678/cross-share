import React from "react";
import useButtons from "../hooks/useButtons";
import useCreateNewPost from "../hooks/useCreateNewPost";
import useSelectSocialMedia from "../hooks/useSelectSocialMedia";
import useYoutubeForm from "../hooks/useYoutubeForm";
import CreateNewPostModal from "./CreateNewPostModal";
import SelectSocialMedia from "./SelectSocialMedia";

function CreateNewPostHeader() {
  const { openModal, renderInputFields, closeModal } = useCreateNewPost();
  const { PrimaryButton } = useButtons();
  const { handleOnChange, platform } = useSelectSocialMedia();
  const { handleYoutubeFormSubmit, isLoading } = useYoutubeForm();

  return (
    <header>
      {isLoading ? <span className="loader"></span> : null}
      <SelectSocialMedia />
      <PrimaryButton onClick={openModal} text="Create New Post" />
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

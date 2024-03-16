import React from "react";
import useButtons from "../../hooks/useButtons";
import useCreateNewPost from "../../hooks/useCreateNewPost";
import SelectSocialMedia from "../ui/SelectSocialMedia";
import CreateNewPostModal from "./CreateNewPostModal";

function CreateNewPostHeader() {
  const { openModal } = useCreateNewPost();
  const { PrimaryButton } = useButtons();

  return (
    <header>
      <SelectSocialMedia />
      <PrimaryButton onClick={openModal} text="Create New Post" />
      <CreateNewPostModal/>
    </header>
  );
}

export default CreateNewPostHeader;

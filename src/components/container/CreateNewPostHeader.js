import React from "react";
import useButtons from "../../hooks/useButtons";
import useContextHook from "../../hooks/useContextHook";
import useCreateNewPost from "../../hooks/useCreateNewPost";
import CreateNewPostModal from "./CreateNewPostModal";

function CreateNewPostHeader() {
  const { openModal } = useCreateNewPost();
  const { setIsOpenModal } = useContextHook();
  const { PrimaryButton } = useButtons();

  return (
    <header>
      <h3>Uploaded videos</h3>
      <PrimaryButton onClick={openModal} text="Create New Post" />
      <CreateNewPostModal />
    </header>
  );
}

export default CreateNewPostHeader;

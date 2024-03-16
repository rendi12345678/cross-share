import React from "react";
import useCreateNewPost from "../../hooks/useCreateNewPost";
import useSelectSocialMedia from "../../hooks/useSelectSocialMedia";
import CancelAndUpload from "../ui/CancelAndUpload";
import ChoosePlatform from "../ui/ChoosePlatform";
import DateAndAccessToken from "../ui/DateAndAccessToken";
import Form from "../ui/Form";
import Modal from "../ui/Modal";

const CreateNewPostModal = () => {
  const { renderInputFields, closeModal } = useCreateNewPost();
  const { handleOnChange, platform, handleSubmitForm } = useSelectSocialMedia();

  return (
    <>
      <Modal className="create-new-post-modal">
        <h1>Create New Post</h1>
        <Form onSubmit={handleSubmitForm}>
          <ChoosePlatform handleOnChange={handleOnChange} />
          <DateAndAccessToken />
          {renderInputFields(platform)}
          <CancelAndUpload closeModal={closeModal} />
        </Form>
      </Modal>
    </>
  );
};

export default CreateNewPostModal;
